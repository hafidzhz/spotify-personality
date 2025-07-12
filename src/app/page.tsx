import { AuthButton } from '@/components/auth-button';
import { Music } from 'lucide-react';
import Image from 'next/image';

const personalities = [
  {
    name: 'The Time Traveler',
    description: 'You find comfort in the classics and joy in the forgotten gems.',
    image: 'https://placehold.co/600x400.png',
    hint: 'vintage cassette',
  },
  {
    name: 'The Explorer',
    description: 'Your taste is a passport, stamped with sounds from every corner of the globe.',
    image: 'https://placehold.co/600x400.png',
    hint: 'world map',
  },
  {
    name: 'The Connoisseur',
    description: 'You have a refined palate, enjoying niche genres and complex arrangements.',
    image: 'https://placehold.co/600x400.png',
    hint: 'abstract art',
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen p-8 overflow-x-hidden text-center bg-background">
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

      <div className="relative z-10 max-w-2xl text-center animate-fade-in">
        <h1 className="text-5xl font-bold tracking-tighter text-primary font-headline md:text-7xl">
          LiveYourMusic
        </h1>
        <p className="mt-4 text-lg text-foreground/80 md:text-xl">
          Discover the soul behind your sound. Connect your Spotify to unveil a psychological profile based on your music taste.
        </p>
        <AuthButton />
      </div>

      <div className="relative z-10 w-full max-w-5xl mt-24 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <h2 className="text-3xl font-bold text-center font-headline">What's Your Sonic Personality?</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          {personalities.map((p, i) => (
             <div key={p.name} className="p-4 overflow-hidden text-left transition-transform duration-300 transform border rounded-lg shadow-lg bg-card/50 backdrop-blur-sm border-border/20 hover:scale-105 hover:shadow-xl">
               <Image 
                src={p.image}
                alt={p.name}
                width={600}
                height={400}
                className="object-cover w-full h-40 rounded-md"
                data-ai-hint={p.hint}
               />
               <h3 className="mt-4 text-xl font-bold font-headline">{p.name}</h3>
               <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
             </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-24 text-sm text-muted-foreground">
        <p>Powered by Generative AI for deep musical analysis.</p>
      </div>
    </main>
  );
}
