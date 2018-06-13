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
+ Create an `isAuthenticated` method in the `AuthService` which checks whether the user's JWT has expired (Hint: use angular2-jwt for this)
+ Conditionally hide and show the **Log In** and **Log Out** links based on whether the user's JWT is expired


