import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const playlists = [
  { name: "Introspective Echoes", image: "https://placehold.co/150x150.png", hint: "abstract waves" },
  { name: "City Night Drive", image: "https://placehold.co/150x150.png", hint: "city night" },
  { name: "Dream Pop Daydream", image: "https://placehold.co/150x150.png", hint: "dreamy clouds" },
  { name: "Upbeat Indie Mix", image: "https://placehold.co/150x150.png", hint: "vibrant colors" },
];

export function PlaylistRecommendations() {
  return (
    <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '450ms' }}>
      <CardHeader>
        <CardTitle className="text-xl font-headline">Curated For You</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {playlists.map((playlist) => (
          <div key={playlist.name} className="flex items-center gap-4 p-2 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-primary/10">
            <Image
              src={playlist.image}
              alt={playlist.name}
              width={64}
              height={64}
              className="rounded-md"
              data-ai-hint={playlist.hint}
            />
            <div className="flex-1">
                <p className="font-semibold text-foreground/90">{playlist.name}</p>
                <p className="text-sm text-muted-foreground">Playlist</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
