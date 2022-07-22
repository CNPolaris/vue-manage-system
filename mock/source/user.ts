import { MockMethod } from 'vite-plugin-mock'
import {config} from "md-editor-v3/lib/MdEditor/config";

// 用户
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
        departmentId: 1,
        companyId: 2
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
        departmentId: 2,
        companyId: 2
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
        departmentId: 1,
        companyId: 2
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
        departmentId: 1,
        companyId: 2
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
        departmentId: 1,
        companyId: 2
    }
]
// 公司
const companies = [
    {
        id: 1,
        name: "北极星科技",
        address: "中国",
        superiorId: null
    },
    {
        id: 2,
        name: "南京分公司",
        address: "南京雨花台区",
        superiorId: 1
    },
    {
        id: 3,
        name: "上海分公司",
        address: "上海静安区",
        superiorId: 1
    }
]

// 部门
const departments = [
    {
        id: 1,
        name: "研发部",
        companyId: 2
    },
    {
        id: 2,
        name: "财务部",
        companyId: 2
    },
    {
        id: 3,
        name: "测试部",
        companyId: 2
    },
    {
        id: 4,
        name: "运维部",
        companyId: 2
    },
    {
        id: 5,
        name: "法务部",
        companyId: 2
    },
    {
        id: 1,
        name: "研发部",
        companyId: 3
    },
    {
        id: 2,
        name: "财务部",
        companyId: 3
    },
    {
        id: 3,
        name: "测试部",
        companyId: 3
    },
    {
        id: 4,
        name: "运维部",
        companyId: 3
    },
    {
        id: 5,
        name: "法务部",
        companyId: 3
    }
]

//查询子公司
export function getCompany(id){
    let temp = []
    for(let item of companies){
        if(item.superiorId === id){
            temp.push(item)
        }
    }
    return temp
}
// 查询部门
export function getDepart(id){
    let temp = []
    for(let item of departments){
        if(item.companyId === id){
            temp.push(item)
        }
    }
    return temp
}

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
            for(let item of list){
                for(let company of companies){
                    if(item.companyId === company.id){
                        item["company"] = company.name
                    }
                }
                for(let depart of departments){
                    if(item.departmentId === depart.id) {
                        item["department"] = depart.name
                    }
                }
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
    },
    {
        url: "/api/department/struct",
        method: 'get',
        response: config => {
            // 部门名
            const { name } = config.query
            let struct = []
            for(let company of companies){
                // 如果是总公司
                if(!company.superiorId){
                    let superior = {}
                    superior["label"] = company.name
                    const companyList = getCompany(company.id)

                    let children = []
                    // 分公司
                    for(let item of companyList){
                        let companyLabel = {}
                        companyLabel["label"] = item.name
                        // 每个分公司的部门
                        const departList = getDepart(item.id)
                        let departLabel = []
                        for(let depart of departList){
                            departLabel.push({label:depart.name})
                        }
                        companyLabel["children"] = departLabel
                        children.push(companyLabel)
                    }
                    superior["children"] = children
                    struct.push(superior)
                }
            }
            return {
                code: 2000,
                data: struct
            }
        }
    }
] as MockMethod[]