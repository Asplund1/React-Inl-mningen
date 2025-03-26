export async function searchArtist(artistName) {
  const url = `https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(
    artistName
  )}&fmt=json&limit=10`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "MyMusicApp/1.0 (myemail@example.com)"
    }
  });
  if (!response.ok) {
    throw new Error(`Nätverksfel i artist-sökning: ${response.status}`);
  }
  const data = await response.json();
  return data.artists || [];
}

export async function searchTrack(trackName) {
  const url = `https://musicbrainz.org/ws/2/recording?query=${encodeURIComponent(
    trackName
  )}&fmt=json&limit=10`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "MyMusicApp/1.0 (myemail@example.com)"
    }
  });
  if (!response.ok) {
    throw new Error(`Nätverksfel i låt-sökning: ${response.status}`);
  }
  const data = await response.json();
  return data.recordings || [];
}
