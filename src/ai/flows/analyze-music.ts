'use server';

/**
 * @fileOverview Analyzes liked songs from Spotify, extracting key audio features, predominant genres,
 * and lyrical themes using GenAI.
 *
 * - analyzeMusic - A function that handles the music analysis process.
 * - AnalyzeMusicInput - The input type for the analyzeMusic function.
 * - AnalyzeMusicOutput - The return type for the analyzeMusic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeMusicInputSchema = z.object({
  audioFeatures: z
    .string()
    .describe('A summary of the audio features of the liked songs.'),
  genres: z.string().describe('A comma separated list of genres of the liked songs.'),
  lyrics: z.string().describe('A summary of the lyrics of the liked songs.'),
});

export type AnalyzeMusicInput = z.infer<typeof AnalyzeMusicInputSchema>;

const AnalyzeMusicOutputSchema = z.object({
  summary: z.string().describe('A summary of the musical characteristics.'),
});

export type AnalyzeMusicOutput = z.infer<typeof AnalyzeMusicOutputSchema>;

export async function analyzeMusic(input: AnalyzeMusicInput): Promise<AnalyzeMusicOutput> {
  return analyzeMusicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeMusicPrompt',
  input: {schema: AnalyzeMusicInputSchema},
  output: {schema: AnalyzeMusicOutputSchema},
  prompt: `You are a music analyst. Analyze the music characteristics based on the following information.

Audio Features: {{{audioFeatures}}}
Genres: {{{genres}}}
Lyrics: {{{lyrics}}}

Provide a summary of the musical characteristics that resonate with the user.`,
});

const analyzeMusicFlow = ai.defineFlow(
  {
    name: 'analyzeMusicFlow',
    inputSchema: AnalyzeMusicInputSchema,
    outputSchema: AnalyzeMusicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
