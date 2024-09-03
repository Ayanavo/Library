// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";
import pkg from "./package.json";
const banner = `/* ! ${pkg.name} | v${pkg.version} | ${pkg.description} */`;

const formats = ["es", "cjs"];

const createConfig = (input, outputDir) => {
    return formats.map((format) => ({
        input: input,
        output: {
            file: `${outputDir}.${format}.js`,
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
    }));
};

export default [...createConfig("src/array/array.js", "dist/lib/array/array"), ...createConfig("src/string/string.js", "dist/lib/string/string")];
