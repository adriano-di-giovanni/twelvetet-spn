import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const config = {
    input: 'src/index.js',
    plugins: [],
}

if (env === 'es' || env === 'cjs') {
    config.output = { format: env }
    config.plugins.push(
        babel({
            plugins: ['external-helpers'],
        })
    )
}

if (env === 'development' || env === 'production') {
    config.output = { format: 'umd' }
    config.name = 'twelvetet'
    config.plugins.push(
        nodeResolve({
            browser: true,
            jsnext: true,
            main: true,
            module: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env),
        })
    )
}

if (env === 'production') {
    config.plugins.push(
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false,
            },
        })
    )
}

export default config
