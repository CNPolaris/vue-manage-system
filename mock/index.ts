import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

import loginModule from './source/login'
import adminUserModule from './source/user'
import roleModule from './source/role'

export function setupProdMockServer() {
    createProdMockServer([...loginModule, ...adminUserModule, ...roleModule])
}