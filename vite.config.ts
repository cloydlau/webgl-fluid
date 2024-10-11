import { visualizer } from 'rollup-plugin-visualizer'
import { name, PascalCasedName } from './package.json'

export default {
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
