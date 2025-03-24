// src/services/musicbrainzService.js

// Söker artister i MusicBrainz
export async function searchArtist(artistName) {
  // MusicBrainz har en enkel sök-URL:
  // https://musicbrainz.org/ws/2/artist?query=ABBA&fmt=json
  const baseUrl = "https://musicbrainz.org/ws/2/artist";
  const query = `?query=${encodeURIComponent(artistName)}&fmt=json`;
  const url = `${baseUrl}${query}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Nätverksfel: ${response.status} ${response.statusText}`);
  }

  // MusicBrainz svarar i JSON (om du använder &fmt=json)
  const data = await response.json();
  return data.artists || [];
}