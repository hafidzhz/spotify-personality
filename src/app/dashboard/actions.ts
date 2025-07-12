"use server";

import { getServerSession } from "next-auth";
import { analyzeMusic } from "@/ai/flows/analyze-music";
import { generateProfile } from "@/ai/flows/generate-profile";
import type { AnalyzeMusicOutput } from '@/ai/flows/analyze-music';
import type { GenerateProfileOutput } from '@/ai/flows/generate-profile';
import { getTopTracks, getAudioFeatures } from "@/lib/spotify";

export async function runAnalysis(): Promise<AnalyzeMusicOutput & GenerateProfileOutput> {
  const session = await getServerSession();
  if (!session?.accessToken) {
    throw new Error("Not authenticated");
  }

  try {
    const topTracks = await getTopTracks(session.accessToken);
    if (!topTracks || topTracks.length === 0) {
      // Handle case where user has no top tracks
      return {
        summary: "Could not retrieve top tracks. You may need to listen to more music on Spotify.",
        personalityInsights: "Could not generate a profile without music data.",
      };
    }
    const trackIds = topTracks.map((track) => track.id);
    const audioFeatures = await getAudioFeatures(session.accessToken, trackIds);

    // Prepare data for GenAI analysis
    const genres = [...new Set(topTracks.flatMap((track) => track.artists.flatMap((artist: any) => artist.genres || [])))].join(", ");
    const avgAudioFeatures = {
        danceability: audioFeatures.reduce((acc, f) => acc + f.danceability, 0) / audioFeatures.length,
        energy: audioFeatures.reduce((acc, f) => acc + f.energy, 0) / audioFeatures.length,
        valence: audioFeatures.reduce((acc, f) => acc + f.valence, 0) / audioFeatures.length,
        acousticness: audioFeatures.reduce((acc, f) => acc + f.acousticness, 0) / audioFeatures.length,
    };
    const lyricsSummary = `User listens to artists like ${[...new Set(topTracks.map(t => t.artists[0].name))].slice(0, 5).join(', ')}.`;

    const spotifyData = {
        audioFeatures: `Average danceability is ${avgAudioFeatures.danceability.toFixed(2)}, energy is ${avgAudioFeatures.energy.toFixed(2)}, valence (positivity) is ${avgAudioFeatures.valence.toFixed(2)}, and acousticness is ${avgAudioFeatures.acousticness.toFixed(2)}.`,
        genres: genres || "user has not listened to genres with specific tags",
        lyrics: lyricsSummary,
    };

    const musicAnalysis = await analyzeMusic(spotifyData);
    
    const psychologicalProfile = await generateProfile({ musicPreferences: musicAnalysis.summary });

    return {
      ...musicAnalysis,
      ...psychologicalProfile,
    };
  } catch (error) {
    console.error("Error in AI analysis flow:", error);
    throw new Error("Failed to generate music profile.");
  }
}
