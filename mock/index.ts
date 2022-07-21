import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

import loginModule from './source/login'

export function setupProdMockServer() {
    createProdMockServer([...loginModule])
}