import { AuthButton } from '@/components/auth-button';
import { Music } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden text-center bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
       <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 blur-3xl w-96 h-96 rounded-full bg-primary/20"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 blur-3xl w-96 h-96 rounded-full bg-accent/20"
      />

      <div className="relative z-10 max-w-2xl animate-fade-in">
        <h1 className="text-5xl font-bold tracking-tighter text-primary font-headline md:text-7xl">
          LiveYourMusic
        </h1>
        <p className="mt-4 text-lg text-foreground/80 md:text-xl">
          Discover the soul behind your sound. Connect your Spotify to unveil a psychological profile based on your music taste.
        </p>
        <AuthButton />
        <div className="mt-12 text-sm text-muted-foreground">
          <p>Powered by Generative AI for deep musical analysis.</p>
        </div>
      </div>
    </main>
  );
}
