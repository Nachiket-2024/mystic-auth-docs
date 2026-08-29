import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'mystic_auth/README',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Using as a Template',
      link: {
        type: 'doc',
        id: 'mystic_auth/template-usage/overview',
      },
      items: [
        'mystic_auth/template-usage/frontend-customization',
        'mystic_auth/template-usage/syncing-upstream',
        'mystic_auth/template-usage/worked-example',
      ],
    },
    {
      type: 'html',
      value: '<hr class="sidebar-divider" />',
      className: 'sidebar-divider-container',
    },
    {
      type: 'doc',
      id: 'mystic_auth/api/reference',
      label: 'API Reference',
    },
    {
      type: 'doc',
      id: 'mystic_auth/appearance/overview',
      label: 'Appearance',
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'mystic_auth/architecture/system-overview',
      },
      items: [
        'mystic_auth/architecture/backend',
        'mystic_auth/architecture/frontend',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      link: {
        type: 'doc',
        id: 'mystic_auth/authentication/overview',
      },
      items: [
        'mystic_auth/authentication/signup-and-verification',
        'mystic_auth/authentication/login',
        'mystic_auth/authentication/logout',
        'mystic_auth/authentication/password-reset',
        'mystic_auth/authentication/session-management',
        'mystic_auth/authentication/oauth2-pkce',
        'mystic_auth/authentication/account-deletion',
        'mystic_auth/authentication/system-superuser',
      ],
    },
    {
      type: 'category',
      label: 'Authorization (PBAC)',
      link: {
        type: 'doc',
        id: 'mystic_auth/authorization/architecture',
      },
      items: [
        'mystic_auth/authorization/policy-examples',
        'mystic_auth/authorization/rbac-quickstart',
        'mystic_auth/authorization/common-patterns',
        'mystic_auth/authorization/condition-schema-reference',
        'mystic_auth/authorization/adding-permissions',
        'mystic_auth/authorization/adding-condition-handlers',
        'mystic_auth/authorization/writing-testing-policies',
        'mystic_auth/authorization/troubleshooting',
      ],
    },
    {
      type: 'doc',
      id: 'mystic_auth/background-workers/procrastinate',
      label: 'Background Workers',
    },
    {
      type: 'doc',
      id: 'mystic_auth/concerns/README',
      label: 'Concerns',
    },
    {
      type: 'doc',
      id: 'mystic_auth/database/design',
      label: 'Database',
    },
    {
      type: 'category',
      label: 'Deployment & DevOps',
      link: {
        type: 'doc',
        id: 'mystic_auth/deployment/guide',
      },
      items: [
        'mystic_auth/deployment/dev',
        'mystic_auth/deployment/local-prod',
        'mystic_auth/deployment/prod',
        'mystic_auth/deployment/quick-tunnel',
        'mystic_auth/deployment/named-tunnel',
        'mystic_auth/docker/overview',
        'mystic_auth/docker/validation-history',
        'mystic_auth/cicd/overview',
      ],
    },
    {
      type: 'doc',
      id: 'mystic_auth/error-monitoring/overview',
      label: 'Error Monitoring',
    },
    {
      type: 'doc',
      id: 'mystic_auth/geolocation/overview',
      label: 'Geolocation',
    },
    {
      type: 'doc',
      id: 'mystic_auth/legal/overview',
      label: 'Legal',
    },
    {
      type: 'category',
      label: 'Project Story',
      link: {
        type: 'doc',
        id: 'mystic_auth/project-story/README',
      },
      items: [
        'mystic_auth/project-story/structure-then-and-now',
        'mystic_auth/project-story/timeline',
        'mystic_auth/project-story/tools',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      link: {
        type: 'doc',
        id: 'mystic_auth/security/decisions',
      },
      items: [
        'mystic_auth/security/decisions-auth',
        'mystic_auth/security/decisions-infra',
        'mystic_auth/security/decisions-product',
        'mystic_auth/security/hardening',
        'mystic_auth/security/hardening-http',
        'mystic_auth/security/hardening-infra',
        'mystic_auth/security/hardening-abuse-prevention',
      ],
    },
    {
      type: 'category',
      label: 'Testing & CI/CD',
      link: {
        type: 'doc',
        id: 'mystic_auth/testing/overview',
      },
      items: [
        'mystic_auth/testing/coverage-authentication',
        'mystic_auth/testing/coverage-authorization',
        'mystic_auth/testing/coverage-users-and-sessions',
        'mystic_auth/testing/coverage-security',
        'mystic_auth/testing/coverage-infrastructure',
        'mystic_auth/testing/coverage-frontend',
      ],
    },
    {
      type: 'category',
      label: 'Translations',
      link: {
        type: 'doc',
        id: 'mystic_auth/translations/overview',
      },
      items: ['mystic_auth/translations/adding-a-language'],
    },
  ],
};

export default sidebars;
