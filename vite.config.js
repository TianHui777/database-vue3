import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    //解决跨域问题
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000/',  //请求对象
                ws: true,//代理websocked
                changeOrigin: true,
                secure: false, //target是否为https接口
                pathRewrite: {
                    '^/api': ''  //更改请求URL
                }
            }
        }
    }


})
