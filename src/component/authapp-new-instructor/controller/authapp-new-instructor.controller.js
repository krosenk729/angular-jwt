import inject from 'ng-inject';
import md5 from 'md5';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappNewInstructor {

    $onInit() {
    }
}

export default AuthappNewInstructor;
