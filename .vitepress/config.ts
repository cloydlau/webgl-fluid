import { description, name as title, repository } from '../package.json'

const repoUrl = repository.url.replace(/^git\+/, '').replace(/\.git$/, '')

export default {
  title,
  description,
  themeConfig: {
    outline: 'deep',
    nav: [
      { text: 'Playground', link: 'https://cloydlau.github.io/playground/webgl-fluid/' },
      { text: 'Releases', link: `${repoUrl}/releases` },
    ],
    socialLinks: [
      { icon: 'github', link: repoUrl },
    ],
  },
}
