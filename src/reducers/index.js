
const initialState = {
  players: [],
  teams: [],
  picks: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PLAYERS':
      return {...state, players: action.payload}
    case 'GET_TEAMS':
      return {...state, teams: action.payload}
    case 'CREATE_TEAM':
      return {...state, teams: [...state.teams, action.payload]}
    case 'CREATE_PICK':
      const teamToCopy = state.teams.find(team => team.id === action.payload.pick.team_id)
      const index = state.teams.indexOf(teamToCopy)
      const teamCopy = {...teamToCopy, picks: [...teamToCopy.picks, action.payload.pick.player]}
      const copyTeams = [...state.teams]
      copyTeams.splice(index, 1, teamCopy)
      return {...state, teams: copyTeams}
    case 'GET_PICKS':
      return {...state, picks: action.payload}
    default:
      return state
  }
}
