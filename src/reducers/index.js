
const initialState = {
  players: [],
  teams: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PLAYERS':
      return {...state, players: action.payload}
    case 'GET_TEAMS':
      return {...state, teams: action.payload}
    case 'CREATE_TEAM':
      return {...state, teams: [...state.teams, action.payload]}
    case 'SELECT_PLAYER':
      return {...state, teams: action.payload}
    default:
      return state
  }
}
