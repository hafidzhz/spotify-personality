// src/ai/flows/generate-profile.ts
'use server';
/**
 * @fileOverview Generates a personalized psychological profile based on music preferences.
 *
 * - generateProfile - A function that generates a psychological profile.
 * - GenerateProfileInput - The input type for the generateProfile function.
 * - GenerateProfileOutput - The return type for the generateProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfileInputSchema = z.object({
  musicPreferences: z
    .string()
    .describe('A description of the user\u0027s music preferences, including liked songs, genres, and artists.'),
});
export type GenerateProfileInput = z.infer<typeof GenerateProfileInputSchema>;

const GenerateProfileOutputSchema = z.object({
  personalityInsights: z
    .string()
    .describe('A detailed psychological profile of the user, based on their music preferences.'),
});
export type GenerateProfileOutput = z.infer<typeof GenerateProfileOutputSchema>;

export async function generateProfile(input: GenerateProfileInput): Promise<GenerateProfileOutput> {
  return generateProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfilePrompt',
  input: {schema: GenerateProfileInputSchema},
  output: {schema: GenerateProfileOutputSchema},
  prompt: `You are an AI trained in psychological assessment. You will generate a personalized psychological profile of the user, based on their music preferences. Analyze the provided music preferences to identify personality traits, values, and potential emotional states.

Music Preferences: {{{musicPreferences}}}

Based on the above music preferences, generate a detailed psychological profile.`, 
});

const generateProfileFlow = ai.defineFlow(
  {
    name: 'generateProfileFlow',
    inputSchema: GenerateProfileInputSchema,
    outputSchema: GenerateProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
