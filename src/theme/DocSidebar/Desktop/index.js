import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import styles from './styles.module.css';

function SidebarToggleButtons() {
  const expandAll = useCallback(() => {
    const sidebar = document.querySelector('.menu');
    if (!sidebar) return;
    sidebar
      .querySelectorAll('.menu__list-item-collapsible button[aria-expanded]')
      .forEach((btn) => {
        if (btn.getAttribute('aria-expanded') === 'false') btn.click();
      });
  }, []);

  const collapseAll = useCallback(() => {
    const sidebar = document.querySelector('.menu');
    if (!sidebar) return;
    sidebar
      .querySelectorAll('.menu__list-item-collapsible button[aria-expanded]')
      .forEach((btn) => {
        if (btn.getAttribute('aria-expanded') === 'true') btn.click();
      });
  }, []);

  return (
    <div className={styles.sidebarHeader}>
      <button
        className={styles.sidebarToggleBtn}
        onClick={expandAll}
        title="Expand all sections"
        type="button"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"
          />
        </svg>
        <span>Expand All</span>
      </button>
      <button
        className={styles.sidebarToggleBtn}
        onClick={collapseAll}
        title="Collapse all sections"
        type="button"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
          />
        </svg>
        <span>Collapse All</span>
      </button>
    </div>
  );
}

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable },
    },
  } = useThemeConfig();
  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}
    >
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <SidebarToggleButtons />
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
