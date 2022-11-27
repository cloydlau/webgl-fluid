import type { ConfigEnv, UserConfigExport } from 'vite'
import { name, pascalCasedName } from './package.json'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    build: {
      lib: {
        name,
        entry: 'src/index.js',
      },
      rollupOptions: {
        output: {
          globals: {
            [name]: pascalCasedName,
          },
        },
      },
    },
  }
}
