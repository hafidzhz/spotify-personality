import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const friends = [
  { name: "Alex", initial: "A", hint: "man portrait" },
  { name: "Brenda", initial: "B", hint: "woman portrait" },
  { name: "Chris", initial: "C", hint: "person portrait" },
  { name: "Dana", initial: "D", hint: "woman glasses" },
];

export function FriendActivity() {
  return (
    <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '600ms' }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Users className="w-5 h-5" />
          Social Circle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">Compare your sonic personality with friends.</p>
        <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
            {friends.map((friend) => (
                <Avatar key={friend.name} className="border-2 border-background">
                <AvatarImage src={`https://placehold.co/40x40.png`} alt={friend.name} data-ai-hint={friend.hint} />
                <AvatarFallback>{friend.initial}</AvatarFallback>
                </Avatar>
            ))}
            </div>
            <Button variant="outline" size="sm" className="ml-auto">Compare</Button>
        </div>
      </CardContent>
    </Card>
  );
}
