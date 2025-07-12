"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Frown, Meh, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const moods = [
    { name: "Happy", icon: Smile },
    { name: "Sad", icon: Frown },
    { name: "Calm", icon: Meh },
    { name: "Energetic", icon: Zap },
]

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
      <CardHeader>
        <CardTitle className="text-xl font-headline">Current Mood</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-around">
        {moods.map((mood) => (
            <Button 
                key={mood.name}
                variant="ghost" 
                size="icon" 
                className={cn(
                    "w-16 h-16 rounded-full hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-300",
                    selectedMood === mood.name && "bg-accent/20 text-accent scale-110"
                )}
                onClick={() => setSelectedMood(mood.name)}
            >
                <mood.icon className="w-8 h-8" />
                <span className="sr-only">{mood.name}</span>
            </Button>
        ))}
      </CardContent>
    </Card>
  );
}
