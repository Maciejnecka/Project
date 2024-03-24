const initialState = {
  playerPosition: { x: 0, y: 0 },
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      const { x, y } = state.playerPosition;
      switch (action.payload) {
        case 'w':
          return { ...state, playerPosition: { x, y: Math.max(y - 1, 0) } };
        case 's':
          return { ...state, playerPosition: { x, y: Math.min(y + 1, 24) } };
        case 'a':
          return { ...state, playerPosition: { x: Math.max(x - 1, 0), y } };
        case 'd':
          return { ...state, playerPosition: { x: Math.min(x + 1, 24), y } };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default playerReducer;
