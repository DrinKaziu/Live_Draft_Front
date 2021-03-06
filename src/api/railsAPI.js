const baseUrl = "http://localhost:3001/api/v1";

export function getPlayers() {
  return fetch(`${baseUrl}/players`)
    .then(res => res.json())
}

export function createTeam(name, position) {
  const options = {
    headers: {
      'Accepts': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      team: {name: name, position: position}
    })
  }
  return fetch(`${baseUrl}/teams`, options)
  .then(res => res.json())
}

export function getTeams() {
  return fetch(`${baseUrl}/teams`)
  .then(res => res.json())
}

export function createPick(teamId, playerId) {
  const options = {
    headers: {
      'Accepts': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      pick: {team_id: teamId, player_id: playerId}
    })
  }
  return fetch(`${baseUrl}/picks`, options)
  .then(res => res.json())
}

export function getPicks() {
  return fetch(`${baseUrl}/picks`)
    .then(res => res.json())
}

export function deletePick(teamId, playerId) {
  const options = {
    headers: {
      'Accepts': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify({
      pick: {team_id: teamId, player_id: playerId}
    })
  }
  return fetch(`${baseUrl}/picks`, options)
  .then(res => res.json())
}
