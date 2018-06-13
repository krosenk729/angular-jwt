import inject from 'ng-inject';
import * as jwtDecode from 'jwt-decode';

@inject('authService')
class AuthappProfile {

    profile = {};
    payload = {};

    $onInit(){
        this.profile = jwtDecode.default(this.authService.getToken());
        this.payload = jwtDecode.default(this.authService.getToken());
    }
}

export default AuthappProfile;
