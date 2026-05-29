import { codeInspectorPlugin } from 'code-inspector-plugin'
import { name, PascalCasedName } from './package.json'

export default async ({ command }) => {
  // VitePress 会合并根目录 vite.config.ts；library 模式（build.lib）与其多页构建冲突
  const isVitePress = process.argv.some(arg => arg.includes('vitepress'))
  if (isVitePress)
    return {}
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
