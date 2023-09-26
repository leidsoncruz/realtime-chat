'use client';

import { MutableRefObject, useRef, useEffect } from 'react';

export const useChatScroll = <T>(
  dep: T
): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);

  return ref;
};
