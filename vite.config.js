import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock"
import path from "path";

export default {
    base: '/vue-manage-system/',
    plugins: [
        vue(),
        viteMockServe({
            mockPath: "./mock/source",
            localEnabled: true, //开发
            prodEnabled: false, //生产
            injectCode: ` import { setupProdMockServer } from './mock';
                            setupProdMockServer();`,
            watchFiles: true,
            injectFile: path.resolve("src/main.js")
        })
    ],
    optimizeDeps: {
        include: ['schart.js']
    }
}