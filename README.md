# Angular 1.x Authentication for Front End Masters

https://github.com/chenkie/user-authentication-api

## Running the App

Install the dependencies:

```bash
npm install
```

Run the development version:

```bash
npm run dev
```

The app will be served at `localhost:3000`.

--------------------------

## Endpoint 

Source: https://github.com/chenkie/user-authentication-api

Endpoint: https://user-authentication-api.now.sh

+ Make a POST request to `/api/users/authenticate` with `user` and `password` (response is JWT)
+ Make a POST request to `/api/users` with `username`, `email`, and `password` (response is JWT)

--------------------------

## Implementing Authentication Challenges

* Complete the `onLoginSubmit` and `onSignupSubmit` methods to make `POST` requests (sending the user's credentials) to the `api/users/authenticate` and `api/users` endpoints respectively
* Provide a method in `auth.service.js` which saves the returned JWT in local storage
* Create a `logout` method which removes the user's JWT from local storage
* Provide buttons for **Log In** and **Log Out** in the home view and the toolbar


Step 1:
+ Create a screen for login and signup
+ Make a POST request with the user’s credentials
+ Store the JWT that comes back in local storage
+ Create a logout method which removes the token from local storage
+ Provide buttons for Log In and Log Out in the home view and the toolbar 

Step 2:
+ Conditionally hide and show the **Log In** and **Log Out** links and buttons based on whether the user's JWT is expired (Hint: there's a method from angular-jwt that can help)

Step 3:
+ Use the payload from the JWT to generate a user profile
+ Display the user's gravatar, username, and email, along with the full JWT payload in the **Profile** view

Step 4: 
+ Make an authenticated `GET` request to the `/instructors` endpoint and display the returned resources in the **Instructors** view
+ Add a method called `isAdmin` to `auth.service.js` and conditionally show and hide the **Add Instructor** button in the `/instructor` view based on whether the user is authenticated and is an admin
+* Make an authenticated `POST` request to the `/instructors` endpoint to create a new instructor and return to the **Instructors** route to dispaly the newly created resource

Step 5:
+ Add `data { requiresLogin: true }` to the `/profile`, `/instructor` and `/instructor/new` routes
+* Make an authenticated `GET` request to the `/instructors` endpoint and display the returned resources in the **Instructors** view
+ Add a method called `isAdmin` to `auth.service.js` and conditionally show and hide the **Add Instructor** button in the `/instructor` view based on whether the user is authenticated and is an admin



