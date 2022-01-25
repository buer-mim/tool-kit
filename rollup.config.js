import nodeResolve from 'rollup-plugin-node-resolve'; // 帮助寻找node_modules里面的包
import babel from 'rollup-plugin-babel';              // es6 转 es5
import replace from 'rollup-plugin-replace';          // 替换待打包文件里面的一些变量，如 process 在浏览器端不存在，需要被替换
import commonjs from 'rollup-plugin-commonjs';        // 将废es6预发的包转为es6可用
import { terser } from 'rollup-plugin-terser';        // 压缩
import cleaner from 'rollup-plugin-cleaner';          // 清除

const env = process.env.NODE_ENV;

const config = {
    input: 'src/index.js', // 需要打包的文件源路径
    output: {
        file: 'dist/bundle.js', // 打包后的文件夹及文件名
        format: 'es', // 文件的输出格式
        name: 'z', // 包的全局变量名称
        sourcemap: env === 'production' ? false : true
    },
    plugins: [
        nodeResolve(),
        babel({
            exclude: '**/node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        commonjs(),
        cleaner({
            targets: [
                './dist'
            ]
        }),
    ]
};

if(env === 'production'){
    config.plugins.push(
        terser()
    );
};


export default config;
