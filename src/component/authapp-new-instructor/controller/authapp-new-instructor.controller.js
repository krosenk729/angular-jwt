import inject from 'ng-inject';
import md5 from 'md5';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappNewInstructor {

    addInstructor(data){
        this.$http.post(`${API_URL}/instructors`, data)
        .then(() => {
            this.$state.go('instructor');
        }, err => {
            console.log(err);
        });
    }
}

export default AuthappNewInstructor;
