import { MockMethod } from 'vite-plugin-mock'
import {config} from "md-editor-v3/lib/MdEditor/config";

const users = [
    {
        id: 1,
        username: "test01",
        password: "123456",
        nickName: "王朝",
        role: 1,
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        age: 19,
        sex: 1,
        brith: "2022-7-21",
        createTime: "2022-7-21 17:08",
        status: 1,
    },
    {
        id: 2,
        username: "test02",
        password: "123456",
        nickName: "马汉",
        role: 1,
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        age: 19,
        sex: 1,
        brith: "2022-7-21",
        createTime: "2022-7-21 17:08",
        status: 1,
    },
    {
        id: 3,
        username: "test03",
        password: "123456",
        nickName: "张龙",
        role: 2,
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        age: 19,
        sex: 1,
        brith: "2022-7-21",
        createTime: "2022-7-21 17:08",
        status: 1,
    },
    {
        id: 4,
        username: "test04",
        password: "123456",
        nickName: "赵虎",
        role: 2,
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        age: 19,
        sex: 1,
        brith: "2022-7-21",
        createTime: "2022-7-21 17:08",
        status: 1,
    },
    {
        id: 5,
        username: "test05",
        password: "123456",
        nickName: "王朝",
        role: 2,
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        age: 19,
        sex: 1,
        brith: "2022-7-21",
        createTime: "2022-7-21 17:08",
        status: 1,
    }
]

export default [
    {
        url: '/api/admin/user/list',
        method: 'post',
        response: config => {
            const { username, role } = config.body
            let list = []
            if(username || role){
                for(let item of users){
                    if (item.username === username || item.role === role){
                        list.push(item)
                    }
                }
            } else {
                list = users
            }
            return {
                code: 2000,
                data: {
                    list: list,
                    total: users.length
                }
            }
        }
    },
    {
        url: "/api/admin/user/delete",
        method: "get",
        response: config=> {
            const { id } = config.query
            const list = []
            console.log(id)
            for(const item of users){
                if(item.id != id){
                    list.push(item)
                }
            }
            return {
                code: 2000,
                message: "删除成功",
                data: {
                    list: list
                }
            }
        }
    },
    {
      url: "/api/admin/user/detail",
      method: 'get',
      response: config => {
          const { id } = config.query
          for(const item of users){
              if( item.id === +id){
                  return {
                      code: 2000,
                      data: item
                  }
              }
          }
      }
    }
] as MockMethod[]