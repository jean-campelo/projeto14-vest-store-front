import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getHome(token) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/home`,
        headers: {
            authorization: 'Bearer ' + token,
        },
    })
    return promise;
}

export function getCategory(category, token) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/home/${category}`,
        headers: {
            authorization: 'Bearer ' + token,
        },
    })
    return promise;
}

export function getSelection(idSelection, token) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/selection/${idSelection}`,
        headers: {
            authorization: 'Bearer ' + token,
        },
    })
    return promise;
}
