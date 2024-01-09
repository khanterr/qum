'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { useAuthContext } from '@/context/AuthContext';
import Link from 'next/link';

export default function Home() {
  const { user } = useAuthContext();

  return (
    <main className='flex min-h-screen flex-col items-center px-96 py-24 bg-red-500'>
      <div className='w-full'>
        <header className='flex items-center justify-between bg-green-500 px-5 py-5'>
          <div className='flex items-center'>
            <div className='text-2xl mr-5'>qum</div>
            <div>
              <Input className='border-red-500' type='text' />
            </div>
          </div>
          {!user && (
            <nav>
              <Button primary>
                <Link href='/signin'>Sign In</Link>
              </Button>
              <Button secondary>
                <Link href='/signup'>Sign Up</Link>
              </Button>
            </nav>
          )}
          {!!user && (
            <nav>
              <Button primary>
                <Link href='/dashboard'>Dashboard</Link>
              </Button>
              <Button secondary>
                <Link href='/submission-form'>Submit salary</Link>
              </Button>
              <Button secondary>
                <Link href='/logout'>Logout</Link>
              </Button>
            </nav>
          )}
        </header>
      </div>
      <div className='flex items-center justify-center min-h-96'>
        <div>
          <h1 className='text-5xl'>Leave your salary</h1>
        </div>
      </div>
    </main>
  );
}
