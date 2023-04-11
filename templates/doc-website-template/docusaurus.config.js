const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '服务平台',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '服务平台文档中心',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'team',
          position: 'left',
          label: '团队介绍',
        },
        {
          type: 'doc',
          docId: 'component/base/async-button',
          position: 'left',
          label: '组件文档',
        },
        {to: '/abc', label: 'Abc', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '帮助中心',
          items: [
            {
              label: '链接大全',
              to: 'docs/links',
            },
          ],
        },
      ],
      logo: {
        alt: '涂鸦-服务平台',
        src: 'img/logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()}, Inc.  ❤️ &nbsp;Built by ols-scripts.`,
    },
    prism: {
      defaultLanguage: 'typescript',
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  themes: ['./src/plugins/theme-live-codeblock'],
  // plugins: [require.resolve('docusaurus-lunr-search')],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
