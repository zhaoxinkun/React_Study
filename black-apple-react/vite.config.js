import {defineConfig} from 'vite'
import react, {reactCompilerPreset} from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'node:path'
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const createAlias = (dirname) => path.resolve(__dirname, `src/${dirname}`)


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
            fastRefresh: true,
        }),
        babel({presets: [reactCompilerPreset()]})
    ],
    resolve: {
        alias: {
            '@': createAlias(""),
            "@components": createAlias("components"),
            "~img": createAlias("assets/images"),
            "@style": createAlias("style"),
            "@types": createAlias("types"),
        }
    }
})
