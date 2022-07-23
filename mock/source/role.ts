import { MockMethod } from 'vite-plugin-mock';

const roles = [
    {
        id: 1,
        name: "超级管理员",
        code: "admin",
        order: 1,
        status: true,
        createTime: "2022-07-19 16:16:08"
    },
    {
        id: 1,
        name: "普通用户",
        code: "common",
        order: 2,
        status: true,
        createTime: "2022-07-19 16:16:08"
    },
]

export default [
    {
        url: "/api/role/list",
        method: "get",
        response: config => {
            const { page,limit,name,status,code } = config.query
            let list = []
            if(name||status||code){
                for(let item of roles){
                    if(item.name==name||item.status==status||item.code==code){
                        list.push(item)
                    }
                }
            } else {
                list = roles
            }
            return {
                code: 2000,
                data: {
                    list: list,
                    total: roles.length
                },
                message: "成功"
            }
        }

    }
] as MockMethod[]