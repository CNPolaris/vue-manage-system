import request from '../utils/request';

export function getUserList(data){
    return request({
        url: "/api/admin/user/list",
        method: 'post',
        headers: {
            'Authorization': 'Bearer'
        },
        data
    })
}

export function getUserDetail(id) {
    return request({
        url: "/api/admin/user/detail",
        method: 'get',
        params: { id }
    })
}

export function deleteUser(id) {
    return request({
        url: "/api/admin/user/delete",
        method: 'get',
        params: { id }
    })
}