import request from '../utils/request';

export function getDepartStruct(){
    return request({
        url: "/api/department/struct",
        method: 'get',
    })
}