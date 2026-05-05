import { codeInspectorPlugin } from 'code-inspector-plugin'
import { name, PascalCasedName } from './package.json'

export default async ({ command }) => {
  const [{ visualizer }, { default: legacy }, { default: browserslistToEsbuild }] = await Promise.all([
    import('rollup-plugin-visualizer'),
    import('@vitejs/plugin-legacy'),
    import('browserslist-to-esbuild'),
  ])

  return {
    plugins: [
      { ...visualizer(), apply: 'build' },
      codeInspectorPlugin({
        bundler: 'vite',
        showSwitch: true,
      }),
      command === 'serve' && legacy(),
    ],
    build: {
      lib: {
        name: PascalCasedName,
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

      // https://github.com/vitejs/vite/issues/11489
      target: browserslistToEsbuild(),
    },
  }
}
