// rollup.config.js
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";
const banner = `/* ! ${pkg.name} | v${pkg.version} | ${pkg.description} */`;
const formats = ["es", "cjs", "iife"];
export default formats.map(function (format) {
    return {
        input: "src/index.js",
        output: {
            file: `dist/lib/${format}.js`,
            format: format,
            sourcemap: true,
            name: "Locus",
            banner: banner,
            exports: "auto",
            plugins: [terser({format: {comments: /locus/}})],
        },
        plugins: [
            // Add your plugins here
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: true,
                declarationDir: "dist/lib",
                emitDeclarationOnly: true,
            }),
            // Learn more about plugins from https://rollupjs.org/guide/en/#plugins
        ],
    };
});
