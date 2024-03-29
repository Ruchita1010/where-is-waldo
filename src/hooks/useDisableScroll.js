import { useEffect } from 'react';

export const useDisableScroll = (isEnabled) => {
  useEffect(() => {
    const body = document.body;
    if (isEnabled) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
    return () => {
      body.style.overflow = 'unset';
    };
  }, [isEnabled]);
};
