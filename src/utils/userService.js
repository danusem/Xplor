import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function logout() {
    tokenService.removeToken();
}

function getUser() {
    return tokenService.getUserFromToken();
}

function signup(user) {
   
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(user)
    })
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Email Already Taken!')
        }
    })
    .then(({ token }) => tokenService.setToken(token))
}

export default {
    signup,
    getUser,
    logout
}