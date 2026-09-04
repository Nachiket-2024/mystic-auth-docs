import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MysticAuth',
  tagline: 'Full-stack authentication & PBAC authorization template',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://Nachiket-2024.github.io',
  baseUrl: '/mystic-auth-docs/',

  organizationName: 'Nachiket-2024',
  projectName: 'mystic-auth-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        // Matches mystic-auth's own Inter typeface (theme/themeTokens.ts)
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'authentication, authorization, PBAC, JWT, OAuth2, template, full-stack, docs',
      },
      {
        name: 'description',
        content:
          'Documentation for MysticAuth: a full-stack authentication and PBAC authorization template covering architecture, auth flows, deployment, and security.',
      },
    ],
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'MysticAuth',
      logo: {
        alt: 'MysticAuth Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/Nachiket-2024/mystic-auth',
          label: 'MysticAuth Repo',
          position: 'right',
        },
        {
          href: 'https://github.com/Nachiket-2024/mystic-auth-docs',
          label: 'Docs Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'MysticAuth Repo',
              href: 'https://github.com/Nachiket-2024/mystic-auth',
            },
            {
              label: 'Docs Repository',
              href: 'https://github.com/Nachiket-2024/mystic-auth-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MysticAuth. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
