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
        {
          type: 'category',
          label: 'Syncing Upstream',
          link: {
            type: 'doc',
            id: 'mystic_auth/template-usage/syncing-upstream/README',
          },
          items: [
            'mystic_auth/template-usage/syncing-upstream/rebuild-and-push',
            'mystic_auth/template-usage/syncing-upstream/troubleshooting',
          ],
        },
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
        'mystic_auth/architecture/code-map',
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
        {
          type: 'category',
          label: 'Session Management',
          link: {
            type: 'doc',
            id: 'mystic_auth/authentication/session-management/README',
          },
          items: [
            'mystic_auth/authentication/session-management/token-lifecycle',
            'mystic_auth/authentication/session-management/list-and-revoke-sessions',
            'mystic_auth/authentication/session-management/real-time-push',
            'mystic_auth/authentication/session-management/frontend-and-checks',
          ],
        },
        'mystic_auth/authentication/oauth2-pkce',
        {
          type: 'category',
          label: 'Account Deletion and Purge',
          link: {
            type: 'doc',
            id: 'mystic_auth/authentication/account-deletion/README',
          },
          items: [
            'mystic_auth/authentication/account-deletion/self-service',
            'mystic_auth/authentication/account-deletion/admin-and-purge',
            'mystic_auth/authentication/account-deletion/frontend',
          ],
        },
        {
          type: 'category',
          label: 'System Superuser',
          link: {
            type: 'doc',
            id: 'mystic_auth/authentication/system-superuser/README',
          },
          items: [
            'mystic_auth/authentication/system-superuser/creation-and-promotion-behavior',
            'mystic_auth/authentication/system-superuser/running-commands',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Authorization (PBAC)',
      link: {
        type: 'doc',
        id: 'mystic_auth/authorization/architecture/README',
      },
      items: [
        {
          type: 'category',
          label: 'Architecture',
          link: {
            type: 'doc',
            id: 'mystic_auth/authorization/architecture/README',
          },
          items: [
            'mystic_auth/authorization/architecture/component-responsibilities',
            'mystic_auth/authorization/architecture/full-route-list',
            'mystic_auth/authorization/architecture/frontend-ui',
            'mystic_auth/authorization/architecture/real-time-push',
          ],
        },
        'mystic_auth/authorization/policy-examples',
        'mystic_auth/authorization/rbac-quickstart',
        'mystic_auth/authorization/common-patterns',
        'mystic_auth/authorization/condition-schema-reference',
        'mystic_auth/authorization/adding-permissions',
        'mystic_auth/authorization/adding-condition-handlers',
        'mystic_auth/authorization/writing-testing-policies',
        {
          type: 'category',
          label: 'Troubleshooting',
          link: {
            type: 'doc',
            id: 'mystic_auth/authorization/troubleshooting/README',
          },
          items: [
            'mystic_auth/authorization/troubleshooting/common-issues',
            'mystic_auth/authorization/troubleshooting/redis-and-logging',
            'mystic_auth/authorization/troubleshooting/database-connection',
          ],
        },
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
        'mystic_auth/deployment/environment',
        'mystic_auth/deployment/routing',
        'mystic_auth/deployment/migrations-and-backups',
        'mystic_auth/deployment/production-host',
        'mystic_auth/deployment/dev',
        {
          type: 'category',
          label: 'Local-Prod Deployment',
          link: {
            type: 'doc',
            id: 'mystic_auth/deployment/local-prod/README',
          },
          items: [
            'mystic_auth/deployment/local-prod/cloudflare-quick-tunnel',
            'mystic_auth/deployment/local-prod/cloudflare-named-tunnel',
            'mystic_auth/deployment/local-prod/ngrok-tunnel',
            'mystic_auth/deployment/local-prod/tailscale-funnel',
          ],
        },
        'mystic_auth/deployment/prod',
        {
          type: 'category',
          label: 'Docker',
          link: {
            type: 'doc',
            id: 'mystic_auth/docker/overview',
          },
          items: [
            'mystic_auth/docker/dockerfiles',
            'mystic_auth/docker/compose-modes',
            'mystic_auth/docker/healthchecks',
            'mystic_auth/docker/dev-workflow',
            'mystic_auth/docker/validation-history',
          ],
        },
        'mystic_auth/cicd/overview',
      ],
    },
    {
      type: 'doc',
      id: 'mystic_auth/documentation-style',
      label: 'Documentation Style',
    },
    {
      type: 'category',
      label: 'Environment',
      link: {
        type: 'doc',
        id: 'mystic_auth/environment/README',
      },
      items: [
        'mystic_auth/environment/backend',
        'mystic_auth/environment/frontend',
        'mystic_auth/environment/compose',
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
      type: 'category',
      label: 'Glossary',
      link: {
        type: 'doc',
        id: 'mystic_auth/glossary/README',
      },
      items: [
        'mystic_auth/glossary/authentication',
        'mystic_auth/glossary/authorization',
        'mystic_auth/glossary/infrastructure',
        'mystic_auth/glossary/frontend',
        'mystic_auth/glossary/operations',
        'mystic_auth/glossary/testing',
        'mystic_auth/glossary/tooling',
      ],
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
        {
          type: 'category',
          label: 'How It Evolved',
          link: {
            type: 'doc',
            id: 'mystic_auth/project-story/timeline/README',
          },
          items: [
            'mystic_auth/project-story/timeline/aug',
            'mystic_auth/project-story/timeline/sep-oct',
            'mystic_auth/project-story/timeline/feb-jul',
            'mystic_auth/project-story/timeline/2026-aug',
            'mystic_auth/project-story/timeline/sep',
          ],
        },
        {
          type: 'category',
          label: 'Structure: Then and Now',
          link: {
            type: 'doc',
            id: 'mystic_auth/project-story/structure-then-and-now/folder-tree-then',
          },
          items: [
            'mystic_auth/project-story/structure-then-and-now/folder-tree-then',
            'mystic_auth/project-story/structure-then-and-now/folder-tree-now',
            'mystic_auth/project-story/structure-then-and-now/what-changed',
          ],
        },
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
        {
          type: 'category',
          label: 'Authorization (PBAC) Coverage',
          link: {
            type: 'doc',
            id: 'mystic_auth/testing/coverage-authorization/README',
          },
          items: [
            'mystic_auth/testing/coverage-authorization/policies-and-conditions',
            'mystic_auth/testing/coverage-authorization/access-and-audit',
          ],
        },
        'mystic_auth/testing/coverage-users-and-sessions',
        'mystic_auth/testing/coverage-security',
        {
          type: 'category',
          label: 'Infrastructure Coverage',
          link: {
            type: 'doc',
            id: 'mystic_auth/testing/coverage-infrastructure/README',
          },
          items: [
            'mystic_auth/testing/coverage-infrastructure/core-infrastructure',
            'mystic_auth/testing/coverage-infrastructure/observability-and-workers',
          ],
        },
        'mystic_auth/testing/coverage-frontend',
        'mystic_auth/testing/browser-e2e',
      ],
    },
    {
      type: 'category',
      label: 'Translations',
      link: {
        type: 'doc',
        id: 'mystic_auth/translations/overview/README',
      },
      items: [
        'mystic_auth/translations/overview/setup-and-formatting',
        'mystic_auth/translations/overview/ui-and-errors',
        'mystic_auth/translations/adding-a-language',
      ],
    },
  ],
};

export default sidebars;
