import type { UserConfigExport, ConfigEnv } from 'vite'
import { name } from './package.json'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    build: {
      lib: {
        name,
        entry: 'src/index.js'
      },
    }
  }
}
