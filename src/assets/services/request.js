import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getHome() {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/home`,
    })
    return promise;
}

export function getCategory(category) {
    const promise = axios({
        method: 'get',
        url: `${BASE_URL}/home/${category}`,
    })
    return promise;
}
