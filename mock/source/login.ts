import { MockMethod } from 'vite-plugin-mock'

const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: config => {
            const { username } = config.body
            const token = tokens[username]

            if(!token){
                return {
                    code: 1000,
                    data: '',
                    message: 'unsuccessful'
                }
            }

            return {
                code: 2000,
                data: token,
                message: '登录成功'
            }
        }
    }
] as MockMethod[]