const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

async function spotifyFetch(url: string, accessToken: string, options: RequestInit = {}) {
  const res = await fetch(`${SPOTIFY_API_BASE}/${url}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const errorBody = await res.json();
    console.error('Spotify API Error:', errorBody);
    throw new Error(errorBody.error.message || 'Failed to fetch data from Spotify');
  }

  // Handle cases with no content
  if (res.status === 204) {
    return null;
  }
  
  return res.json();
}

export async function getTopTracks(accessToken: string, limit = 20) {
  const data = await spotifyFetch(`me/top/tracks?time_range=medium_term&limit=${limit}`, accessToken);
  return data.items;
}

export async function getAudioFeatures(accessToken: string, trackIds: string[]) {
    const data = await spotifyFetch(`audio-features?ids=${trackIds.join(',')}`, accessToken);
    return data.audio_features;
}

export async function getLikedSongs(accessToken: string, limit = 20) {
    const data = await spotifyFetch(`me/tracks?limit=${limit}`, accessToken);
    return data.items.map((item: any) => item.track);
}
