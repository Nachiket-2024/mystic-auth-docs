import React, { useRef, useState, type ReactElement } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {
  useScrollPosition,
  useSmoothScrollTo,
  useLocationChange,
} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

const THRESHOLD = 300;

// Unlike the default Docusaurus behavior (which only shows the button while
// scrolling *up*, past the threshold), this shows it any time the page is
// scrolled below the threshold, regardless of scroll direction.
function useBackToTopButton() {
  const [shown, setShown] = useState(false);
  const isFocusedAnchor = useRef(false);
  const { startScroll, cancelScroll } = useSmoothScrollTo();

  useScrollPosition(({ scrollY: scrollTop }) => {
    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false;
      return;
    }
    setShown(scrollTop >= THRESHOLD);
  });

  useLocationChange((locationChangeEvent) => {
    if (locationChangeEvent.location.hash) {
      isFocusedAnchor.current = true;
      setShown(false);
    }
  });

  return {
    shown,
    scrollToTop: () => {
      cancelScroll();
      startScroll(0);
    },
  };
}

export default function BackToTopButton(): ReactElement {
  const { shown, scrollToTop } = useBackToTopButton();
  return (
    <button
      aria-label={translate({
        id: 'theme.BackToTopButton.buttonAriaLabel',
        message: 'Scroll back to top',
        description: 'The ARIA label for the back to top button',
      })}
      className={clsx(
        'clean-btn',
        ThemeClassNames.common.backToTopButton,
        styles.backToTopButton,
        shown && styles.backToTopButtonShow,
      )}
      type="button"
      onClick={scrollToTop}
    />
  );
}
