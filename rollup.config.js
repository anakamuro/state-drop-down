
import babel from '@rollup/plugin-babel'

const config = {
    input: './src/main',
    external: ['react'],
    output: {
       
        globals: {
            react: "React"
        }
    },

    plugins: [
        babel({
            exclude: "node_modules/**"
        })
       
    ],

}
export default config