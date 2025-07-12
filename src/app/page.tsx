import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-background">
      <div className="max-w-2xl animate-fade-in">
        <h1 className="text-5xl font-bold tracking-tighter text-primary font-headline md:text-7xl">
          LiveYourMusic
        </h1>
        <p className="mt-4 text-lg text-foreground/80 md:text-xl">
          Discover the soul behind your sound. Connect your Spotify to unveil a psychological profile based on your music taste.
        </p>
        <Link href="/dashboard" passHref>
          <Button size="lg" className="mt-8 text-lg font-semibold">
            <Music className="mr-2" />
            Connect with Spotify
          </Button>
        </Link>
        <div className="mt-12 text-sm text-muted-foreground">
          <p>Powered by Generative AI for deep musical analysis.</p>
        </div>
      </div>
    </main>
  );
}
