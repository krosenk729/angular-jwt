import inject from 'ng-inject';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappLogin {

  errorMessage = '';

  onLoginSubmit(credentials) {
    // make a POST request to /users/authenticate
    this.$http.post(`${API_URL}/users/authenticate`, credentials)
        // and call finishAuthentication if successful,
        // or display an error if unsuccessful
        .then(response => {
            this.authService.finishAuth(response.data.token);
            this.login = {};
            this.authManager.authenticate();
            this.$state.go('home');
        }, err => {
            this.errorMessage = err.data.message;
        });
        console.log(API_URL === '');
        console.log(credentials);
    }

    onSignupSubmit(credentials) {
    // make a POST request to /users
    this.$http.post(`${API_URL}/users`, credentials)
        // and call finishAuthentication if successful,
        // or display an error if unsuccessful
        .then(response => {
            this.authService.finishAuth(response.data.token);
            this.signup = {};
        }, err => {
            this.errorMessage = err.data.message;
        });
        console.log(credentials);
    }
}

export default AuthappLogin;
