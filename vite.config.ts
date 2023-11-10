import type { ConfigEnv, UserConfigExport } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { PascalCasedName, name } from './package.json'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      { ...visualizer(), apply: 'build' },
    ],
    build: {
      lib: {
        name,
        entry: 'src/index.js',
      },
      sourcemap: true,
      rollupOptions: {
        output: {
          globals: {
            [name]: PascalCasedName,
          },
        },
      },
    },
  }
}
