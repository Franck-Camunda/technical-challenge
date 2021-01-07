# Camunda | Technical Challenge for Sales Engineer

## About the code

Having no prior experience with Java development, I chose to use JavaScript (ES7) which I'm comfortable with. I did two versions of the application:

- **camunda-challenge-node.js** which executes in a Node server.
- **camunda-challenge-browser.js** which executes in any modern browser (not IE).

To keep things simple, I didn't use any external library or framework. The server side version relies on Node's default HTTP module, whereas the client side version use the new Fetch API.

There is of course room for a lot of improvements (error handling, code documentation, transpiling client-side version, etc.) but I assumed this was out of topic for this exercise.

## Questions

### 1. How long did it take you to solve the above exercise?

Altogether it took me about three hours.

### 2. Please describe the main difference between a monolithic system and a microservice architecture

#### Monolithic

The monolithic architecture is the traditional way of building applications as a single and indivisible structure containing an user interface, a server-side application, and a relational database.

All layers and components of the application are tightly connected, managed in a single codebase and served in one place. Altering a feature requires to update the entire application at once and it may be difficult to isolate services for purposes such as independent scaling or code maintainability.

#### Microservices

The microservice architecture is a way of developing an application as a suite of independently deployable small services communicating with each other directly using lightweight mechanisms like an HTTP resource API.

Each microservice performs a particular business functionality, has its own lifecycle, runs its own processes, and uses its own logically distinct database. Microservices can so be developed, deployed, scaled, and maintained separately, allowing independant development teams using different technologies.

### 3. Name two or three modern UI frameworks

[React](https://reactjs.org/), [Vue](https://vuejs.org/), [Angular](https://angular.io/)

### 4. How play the words container, docker and Kubernetes together?

- **Container:** Packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
- **Docker:** An open-source platform for building, deploying, and managing containerized applications. Docker runs on a single node and can be used without Kubernetes.
- **Kubernetes:** An open-source container orchestration system meant to efficiently coordinate clusters of nodes at scale in production. Kubernetes needs a container runtime (Docker or another) and is comparable to Docker Swarm.

Docker and Kubernetes are complementary tools to build, deploy and manage containerized applications.
