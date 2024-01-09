'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { SyntheticEvent, useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  const handleSubmit = (e: SyntheticEvent) => {};

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-2xl mb-5'>Sign Up</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center justify-between'>
            <label htmlFor='email' className='min-w-32'>
              Email
            </label>
            <Input
              name='email'
              maxLength={64}
              value={email}
              onChange={handleEmailChange}
              disabled={loading}
            />
          </div>
          <div className='flex items-center justify-center mt-5'>
            <Button secondary disabled={loading}>
              Signup
            </Button>
          </div>
          {errorMessage.map((msg) => (
            <p key={msg}>{msg}</p>
          ))}
        </form>
      </div>
      <div></div>
    </div>
  );
}
