import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  KeyRound,
  Server,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

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
            to="/docs/mystic_auth/authentication/overview"
          >
            Authentication Overview
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
      'Email/password and Google sign-in, optional passkeys, verified signup, password resets, and revocable rotating sessions.',
    to: '/docs/mystic_auth/authentication/overview',
  },
  {
    icon: ShieldCheck,
    title: 'Authorization',
    description:
      'Condition-aware policies and direct grants protect routes, with explicit permission checks and auditable access decisions.',
    to: '/docs/mystic_auth/authorization/architecture',
  },
  {
    icon: UserRound,
    title: 'Account Experience',
    description:
      'Manage account lifecycle, set a personal brand color, and use the interface in English, Hindi, Marathi, or Gujarati.',
    to: '/docs/mystic_auth/authentication/account-deletion/',
  },
  {
    icon: Server,
    title: 'System Operations',
    description:
      'Background email, self-hosted error and security alerts, Docker deployment options, and database backup and recovery.',
    to: '/docs/mystic_auth/deployment',
  },
];

function FeatureCard({ icon: Icon, title, description, to }: Feature) {
  return (
    <Link to={to} className={clsx('card-surface', styles.featureCard)}>
      <div className={styles.featureHeading}>
        <Icon className={styles.featureIcon} size={20} aria-hidden="true" />
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
      </div>
      <p className={styles.featureDescription}>{description}</p>
    </Link>
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
            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <div key={feature.title}>
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
