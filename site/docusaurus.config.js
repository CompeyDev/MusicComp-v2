// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MusicComp V2 Docs',
  tagline: 'Documentations and more for MusicComp.',
  url: 'https://devcomp.tk/',
  baseUrl: '/MusicComp-v2/docs/', // change to /docs/ for deployment
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CompeyDev', // Usually your GitHub org/user name.
  projectName: 'MusicComp-v2', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/CompeyDev/MusicComp-v2/tree/production/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MusicComp V2 Docs',
        logo: {
          alt: 'Favicon',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://github.com/CompeyDev/MusicComp-v2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://devcomp.tk/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DevComp_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CompeyDev/MusicComp-v2',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevComp. Built with 💖 and JavaScript.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
