
const initialState = {
  players: [],
  teams: [
    {name: 'NachosTacos'},
    {name: 'Treats4Life'},
    {name: 'Yo Belichick Yo Self'},
    {name: 'Dez Nuts'},
    {name: 'Game of Jones'},
    {name: 'Highway to Bell'},
    {name: 'Dak in a Box'},
    {name: 'OBJYN'},
    {name: 'Brady Gaga'},
    {name: 'Forgetting Brandon Marshall'}
  ]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PLAYERS':
    return {...state, players: action.payload}
    default:
    return state
  }
}
