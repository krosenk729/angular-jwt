import jwtDecode from 'jwt-decode';

class AuthService {
    // isAuthenticated is part of jwt library
    // https://www.npmjs.com/package/angular-jwt

    logout() {
        localStorage.removeItem('token');
    }

    finishAuth(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isAdmin(){
        // decode the JWT and check whether the user has a scope of admin
        return jwtDecode(this.getToken()).scope === 'admin';
    }

    /**
    * Factory of this class
    * @returns {ConfigService}
    */
    static factory() {
        return new AuthService();
    }
}

export default AuthService;
