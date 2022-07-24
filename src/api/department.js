import request from '../utils/request';

export function getDepartStruct(){
    return request({
        url: "/api/department/struct",
        method: 'get',
    })
}

export function getDepartmentPage(query) {
    return request({
        url: "/api/department/page",
        method: "get",
        params: { query }
    })
}