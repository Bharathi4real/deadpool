'use client';

import { useEffect } from 'react';
import { useModeStore } from '@/app/lib/store/store';

export default function ModeProvider() {
  const setFromLocalStorage = useModeStore(
    (state) => state.setFromLocalStorage,
  );

  useEffect(() => {
    setFromLocalStorage();
  }, [setFromLocalStorage]);

  return null;
}
