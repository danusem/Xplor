import tokenService from './tokenService';
const BASE_URL = '/api/destinations/';

function getFeatured() {
    return fetch(BASE_URL + 'featured').then(res => res.json());
}

function index() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then(res => res.json());
}

function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('something went wrong');
    })
} 

export default {
    create,
    index,
    getFeatured
}