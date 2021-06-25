import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

export default {
    input: 'src/index.js',
    output: {
        format: 'es',
        file: 'dist/index.js',
    },
    plugins: [
        vue(),
        nodeResolve(),
        commonjs(),
        replace({
            'process\u200b.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true,
        }),
        terser(),
    ],
};