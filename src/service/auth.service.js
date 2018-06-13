class AuthService {

    // creat a method to log the user out by
    // removing the token from local storage
    logout() {
        localStorage.removeItem('token');
    }

    // provide a function to save the JWT in local storage
    finishAuth(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
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
