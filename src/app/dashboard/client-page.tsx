"use client";

import { useEffect, useState } from 'react';
import { runAnalysis } from './actions';
import type { AnalyzeMusicOutput } from '@/ai/flows/analyze-music';
import type { GenerateProfileOutput } from '@/ai/flows/generate-profile';

import { ProfileHeader } from '@/components/dashboard/profile-header';
import { PersonalityProfile } from '@/components/dashboard/personality-profile';
import { MusicVisualizations } from '@/components/dashboard/music-visualizations';
import { MoodTracker } from '@/components/dashboard/mood-tracker';
import { PlaylistRecommendations } from '@/components/dashboard/playlist-recommendations';
import { FriendActivity } from '@/components/dashboard/friend-activity';
import { DashboardSkeleton } from '@/components/dashboard/dashboard-skeleton';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type ProfileData = AnalyzeMusicOutput & GenerateProfileOutput;

export function ClientPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const { toast } = useToast();

  const handleAnalysis = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await runAnalysis();
      setProfileData(data);
    } catch (e) {
      const errorMessage = 'Failed to analyze your music. Please try again.';
      setError(errorMessage);
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAnalysis();
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error || !profileData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="mb-4 text-destructive">{error || 'An unknown error occurred.'}</p>
        <Button onClick={handleAnalysis}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProfileHeader />
      <main className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col space-y-6 lg:col-span-2 lg:space-y-8">
            <PersonalityProfile insights={profileData.personalityInsights} />
            <MusicVisualizations musicSummary={profileData.summary} />
          </div>
          <div className="flex flex-col space-y-6 lg:col-span-1 lg:space-y-8">
            <MoodTracker />
            <PlaylistRecommendations />
            <FriendActivity />
          </div>
        </div>
      </main>
    </div>
  );
}
