"use client"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Music2 } from "lucide-react";

interface MusicVisualizationsProps {
  musicSummary: string;
}

const genreData = [
  { name: 'Indie Pop', value: 30 },
  { name: 'Alt Rock', value: 25 },
  { name: 'Synth-Pop', value: 20 },
  { name: 'Dream Pop', value: 15 },
  { name: 'Electronic', value: 10 },
];

const featureData = [
  { subject: 'Danceability', value: 85, fullMark: 100 },
  { subject: 'Energy', value: 90, fullMark: 100 },
  { subject: 'Valence', value: 60, fullMark: 100 },
  { subject: 'Acousticness', value: 20, fullMark: 100 },
  { subject: 'Instrumental', value: 10, fullMark: 100 },
];

export function MusicVisualizations({ musicSummary }: MusicVisualizationsProps) {
  return (
    <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '150ms' }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Music2 className="text-accent" />
          Music Analysis
        </CardTitle>
        <CardDescription>{musicSummary}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8 pt-4 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-center font-headline">Top Genres</h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={genreData} layout="vertical" margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} width={80} />
                <Tooltip cursor={{fill: 'hsl(var(--accent) / 0.1)'}} contentStyle={{backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}/>
                <Bar dataKey="value" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} background={{ fill: 'hsl(var(--muted))', radius: 4 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-center font-headline">Audio Features</h3>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <RadarChart data={featureData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                <Tooltip contentStyle={{backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}/>
                <Radar name="User" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
