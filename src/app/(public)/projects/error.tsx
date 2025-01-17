'use client';

import { useEffect } from 'react';

// Components
import { ErrorContent } from '@/components';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorContent onClick={reset} />;
}
