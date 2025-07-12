import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share2 } from "lucide-react";
import Link from 'next/link';

export function ProfileHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b sm:p-6 border-border/50">
      <Link href="/" className="text-2xl font-bold tracking-tighter transition-colors font-headline text-primary hover:text-primary/80">
        LiveYourMusic
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Share2 className="w-5 h-5" />
          <span className="sr-only">Share Profile</span>
        </Button>
        <Avatar>
          <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="woman smiling"/>
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
