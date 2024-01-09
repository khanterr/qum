'use client';

import Button from '@/components/Button';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <nav>
        <Button>
          <Link href='/admin/companies'>Companies</Link>
        </Button>
      </nav>
    </div>
  );
}
