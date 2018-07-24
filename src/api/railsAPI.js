const baseUrl = "http://localhost:3001/api/v1";

export function getPlayers() {
  return fetch(`${baseUrl}/players`)
    .then(res => res.json())
}
