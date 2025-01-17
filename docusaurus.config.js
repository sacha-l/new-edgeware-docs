const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Edgeware',
  tagline: 'Dinosaurs are cool',
  url: 'https://edgewa.re/',
  baseUrl: '/',
  // onBrokenLinks: 'ignore',
  // onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/edgeware-main-logomark.svg',
  organizationName: 'edgeware-network', // Usually your GitHub org/user name.
  projectName: 'edgeware', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',//require.resolve('./sidebars.js'),
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/edgeware-network/new-edgeware-docs/blob/main/',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/edgeware-network/new-edgeware-docs',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // title: 'Edgeware',
        logo: {
          alt: 'My Site Logo',
          src: 'img/edgeware-main-logomark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome/welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            type: "search",
            position: "right",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/edgeware-network/new-edgeware-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'BD307D1J2M',
        // Public API key: it is safe to commit it
        apiKey: 'fd4a03ad8dabfd843383cad4feba8d58',
        indexName: 'edgeware',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}