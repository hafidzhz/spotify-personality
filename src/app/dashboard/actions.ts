"use server";

import { analyzeMusic } from "@/ai/flows/analyze-music";
import { generateProfile } from "@/ai/flows/generate-profile";
import type { AnalyzeMusicOutput } from '@/ai/flows/analyze-music';
import type { GenerateProfileOutput } from '@/ai/flows/generate-profile';

export async function runAnalysis(): Promise<AnalyzeMusicOutput & GenerateProfileOutput> {
  // Mock data representing a user's Spotify library
  const mockSpotifyData = {
    audioFeatures: "The user's liked songs have high energy and danceability, with a moderate level of valence. The tempo is generally upbeat, and songs are primarily in major keys. Acousticness is low, indicating a preference for electronic and produced sounds over acoustic instruments.",
    genres: "indie pop, alternative rock, synth-pop, dream pop, bedroom pop, electronic",
    lyrics: "Lyrical themes often revolve around introspection, relationships, nostalgia, and optimistic melancholy. There is a recurring motif of city life and finding beauty in the mundane."
  };

  try {
    const musicAnalysis = await analyzeMusic(mockSpotifyData);
    
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
