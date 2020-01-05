import axios from 'axios';

export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path, data).then(res => {
            // axios always returns a sub object called data
            return resolve(res.data)
        }).catch(err => {
            return reject(err.response.data.error);
        })
    })
}