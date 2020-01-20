# Angular 8 JWT User Authentication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Start the Node Server
* Run `cd server-node-token-auth`
* Run `npm install` to install required packages
* Open terminal run `nodemon`
* Open other terminal run `mongod`

## Authentication REST APIs
* GET (users list)	      **/api**
* POST (sign-in)	      **/api/signin**
* POST (sign-up)	      **/api/register-user**
* GET (user profile)	  **/api/user-profile/id**
* PUT (update user)	      **/api/update-user/id**
* DELETE (delete user)    **/api/delete-user/id**

Node API URL on [http://localhost:4000/api](http://localhost:4000/api)