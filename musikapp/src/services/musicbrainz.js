export async function searchArtist(artistName) {
  const url = `https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(artistName)}&fmt=json&limit=10`;

  //gör ett fetch anrop med user-agent för att identifiera min applikation .
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Musikappen (andreas.asplund@chasacademy.se)"
    }
  });
  // Kontrollera om anropet lyckades, annars throw new error med status
  if (!response.ok) {
    throw new Error(`Nätverksfel i artist-sökning: ${response.status}`);
  }
  // Parsar svaret som JSON och returnerar listan med artister (eller en tom array)
  const data = await response.json();
  return data.artists || [];
}

export async function searchTrack(trackName) {
  const url = `https://musicbrainz.org/ws/2/recording?query=${encodeURIComponent(trackName)}&fmt=json&limit=10`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Musikappen (andreas.asplund@chasacademy.se)"
    }
  });
  if (!response.ok) {
    throw new Error(`Nätverksfel i låt-sökning: ${response.status}`);
  }
  const data = await response.json();
  return data.recordings || [];
}
