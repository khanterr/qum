'use client';

import Loader from '@/components/Loader';
import logout from '@/firebase/auth/logout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    logout().finally(() => router.push('/'));
  }, []);

  return <Loader />;
}
