import request from '../utils/request';

export function getRoleList(query){
    return request({
        url: '/api/role/list',
        methods: 'get',
        params: { query }
    })
}