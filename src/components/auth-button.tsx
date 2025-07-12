'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';
import { Music, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function AuthButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <Button size="lg" className="mt-8 text-lg font-semibold" disabled>
        Loading...
      </Button>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-center">
        <Button size="lg" className="text-lg font-semibold" onClick={() => router.push('/dashboard')}>
          Go to Dashboard
        </Button>
        <Button size="lg" variant="outline" className="text-lg font-semibold" onClick={() => signOut()}>
          <LogOut className="mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button 
      size="lg" 
      className="mt-8 text-lg font-semibold" 
      onClick={() => signIn('spotify', { callbackUrl: '/dashboard' })}
    >
      <Music className="mr-2" />
      Connect with Spotify
    </Button>
  );
}
