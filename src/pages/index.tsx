import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { KeyRound, ShieldCheck, Server, type LucideIcon } from 'lucide-react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const logoUrl = useBaseUrl('img/logo.svg');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoMark}>
          <img src={logoUrl} alt="" width={40} height={40} />
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            MysticAuth
          </Heading>
        </div>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mystic_auth/template-usage/overview"
          >
            Get Started
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/mystic_auth/architecture/system-overview"
          >
            Architecture Overview
          </Link>
        </div>
      </div>
    </header>
  );
}

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
};

const features: Feature[] = [
  {
    icon: KeyRound,
    title: 'Authentication',
    description:
      'JWT/cookie sessions with refresh-token rotation, signup/verification, password reset, Google OAuth2/PKCE, and session management.',
    to: '/docs/mystic_auth/authentication/overview',
  },
  {
    icon: ShieldCheck,
    title: 'Authorization (PBAC)',
    description:
      'Policy-Based Access Control with conditions, resource-level permissions, audit logging, and a privilege-escalation guard.',
    to: '/docs/mystic_auth/authorization/architecture',
  },
  {
    icon: Server,
    title: 'Self-Hosted Deployment',
    description:
      'Docker Compose setup, self-hosted error monitoring (Bugsink), background email queue (Procrastinate), and Cloudflare Tunnel or Caddy TLS options.',
    to: '/docs/mystic_auth/deployment/guide',
  },
];

function FeatureCard({ icon: Icon, title, description, to }: Feature) {
  return (
    <div className="col col--4">
      <Link to={to} className={clsx('card-surface', styles.featureCard)}>
        <Icon className={styles.featureIcon} size={20} aria-hidden="true" />
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={clsx('section', styles.features)}>
          <div className="container">
            <div className="row">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
