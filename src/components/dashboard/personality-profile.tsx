import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

interface PersonalityProfileProps {
  insights: string;
}

export function PersonalityProfile({ insights }: PersonalityProfileProps) {
  return (
    <Card className="shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <BrainCircuit className="text-accent" />
          Your Sonic Personality
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-base leading-relaxed text-foreground/90">
          {insights.split('\\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
