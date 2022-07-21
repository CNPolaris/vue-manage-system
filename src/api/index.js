import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export function login(data) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data
    })
};

export function getInfo(token) {
    return request({
        url: '/api/user/info',
        method: 'get',
        params: { token }
    })
};
