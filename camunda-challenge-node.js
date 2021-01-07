const https = require('https')

class UserDTO {
    constructor(id, email, firstName, lastName) {
        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
    }
}

class UserClient {

    constructor(page) {
        this.page = (Number.isInteger(page)) ? page : 1
    }

    // Call the fetchUserList method and print the names to the console.
    async main () {
        let userList = await this.fetchUserList()
        console.log(userList.map( user => {
            return user.firstName + ' ' + user.lastName
        }))
    }

    // Query a page of the given REST endpoint
    async fetchUserList () {
        let page = this.page

        return new Promise( (resolve, reject) => {
                           
            const options = {
                host: 'reqres.in',
                path: '/api/users?page=' + page
            }
            
            const request = https.request(options, response => {
                let data = ''

                response.on('data', chunk => {
                    data += chunk
                })
            
                response.on('end', () => {
                    try {
                        data = JSON.parse(data).data
                    } catch(error) {
                        reject(error)
                    }

                    // Return the result as List<User>.
                    let userList = data.map( user => {
                        return new UserDTO(user.id, user.email, user.first_name, user.last_name)
                    })
                    resolve(userList)
                })
            })
            
            request.on('error', error => {
                reject(error)
            })
            
            request.end()
        })
    }
}

new UserClient(1).main()