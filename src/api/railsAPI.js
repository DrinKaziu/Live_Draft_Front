const baseUrl = "http://localhost:3001/api/v1";

export function getPlayers() {
  return fetch(`${baseUrl}/players`)
    .then(res => res.json())
}

export function createTeam(name) {
  const options = {
    headers: {
      'Accepts': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      team: {name: name}
    })
  }
  return fetch(`${baseUrl}/teams`, options)
  .then(res => res.json())
}

export function getTeams() {
  return fetch(`${baseUrl}/teams`)
  .then(res => res.json())
}

export function createJoin(player, teamId) {
  const options = {
    headers: {
      'Accepts': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      pick: {team_id: teamId, player: player}
    })
  }
  return fetch(`${baseUrl}/picks`, options)
  .then(res => res.json())
}
