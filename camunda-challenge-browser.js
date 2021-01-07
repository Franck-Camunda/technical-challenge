(function () {

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
            let response = await fetch('https://reqres.in/api/users?page=' + this.page)
            response = await response.json()

            // Return the result as List<User>.
            return response.data.map( user => {
                return new UserDTO(user.id, user.email, user.first_name, user.last_name)
            })
        }
    }

    new UserClient(1).main()

}());