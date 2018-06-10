import inject from 'ng-inject';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappLogin {

  errorMessage = '';

  onLoginSubmit(credentials) {
    // make a POST request to /users/authenticate
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
    console.log(API_URL === '');
    console.log(credentials);
  }

  onSignupSubmit(credentials) {
    // make a POST request to /users
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
    console.log(credentials);
  }
}

export default AuthappLogin;
