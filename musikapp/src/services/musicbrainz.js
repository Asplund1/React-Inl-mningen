// src/services/musicbrainz.js
export async function searchArtist(artistName) {
  const url = `https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(artistName)}&fmt=json`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "MyMusicApp/1.0 (myemail@example.com)"
    }
  });
  if (!response.ok) throw new Error("Nätverksfel i artist-sökning");
  const data = await response.json();
  return data.artists || [];
}

export async function searchTrack(trackName) {
  const url = `https://musicbrainz.org/ws/2/recording?query=${encodeURIComponent(trackName)}&fmt=json`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "MyMusicApp/1.0 (myemail@example.com)"
    }
  });
  if (!response.ok) throw new Error("Nätverksfel i låt-sökning");
  const data = await response.json();
  return data.recordings || [];
}
