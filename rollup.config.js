import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import string from 'rollup-plugin-string'

export default [
    // For the browser bot
    {
        input: 'src/loader.ts',
        output: {
            file: 'build/bundle.js',
            format: 'iife'
        },
        plugins: [
            resolve(),
            commonjs(),
            string({ include: '**/*.html' }),
            typescript(),
        ],

        // To suppress warnings, doesn't actually matter in this bundle.
        context: 'window',
        moduleContext: 'window'
    },
    // For the server bot
    {
        input: 'src/extension.ts',
        output: {
            file: 'build/extension.js',
            format: 'cjs',
        },
        plugins: [
            typescript({ tsconfigOverride: { compilerOptions: { target: 'es2017' }}})
        ]
    }
]
