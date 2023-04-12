### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
By using a async function we can call the await that will allow us to execute lines of code after the promise has been fullfilled.

- What is a Promise?
A promise is data that is going to filled once the function has been called. This allows Javascript to continue to run even without having all the data it needs to complete the function or command.

- What are the differences between an async function and a regular function?
async can run asynchronously meaning it can continue running with other code also running, normal functions need to be completed in order, if there is an issue or error the function stops the code from running.

- What is the difference between Node.js and Express.js?
Node.js is the back-end server, this allows us to run complete jacascript applications, with Express we can run it on a Node.js server and this allows us to configure RESTFUL APIs

- What is the error-first callback pattern?
Error first allows us to create a call-back method that we may anticipate an eror with for example and empty field, if there is an error we can handle it and have to code proceed running.

- What is middleware?
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. This lets us process the information from the req and res data.

- What does the `next` function do?
Next allows us to proceed in the code to the next function, instead of stopping the operation.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
This may not be consider a restful api as we are able to consolidate the code into maybe one api vs making 3 seperate api calls. We also might have issues using the const variable declrations when it comes to making the api request.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
