
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';


const config = {
    input: './src/main.js',
    external:"react",
        output: [{
        file: 'dist/main.js',
        format: 'cjs',
    }, {
        file: 'dist/main.es.js',
        format: 'es',
        exports: 'named'
    }],

    plugins: [
        postcss({
            plugins: [],
            minimize: true
        }),
        babel({
            exclude: "node_modules/**",
            presets: ['@babel/preset-react']

        }),
        resolve(),
        external()
    ],

}
export default config