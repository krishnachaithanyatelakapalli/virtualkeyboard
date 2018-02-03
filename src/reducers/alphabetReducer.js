import * as actionType from '../actions/actionTypes'

const alphabetReducer = (state = {
  string: "",
  isShift: false,
  count: 0
}, action) => {
  let newState = {
    string: "",
    isShift: false,
    count: 0
  };
  switch(action.type) {
    case actionType.A:
    case actionType.B:
    case actionType.C:
    case actionType.D:
    case actionType.E:
    case actionType.F:
    case actionType.G:
    case actionType.H:
    case actionType.I:
    case actionType.J:
    case actionType.K:
    case actionType.L:
    case actionType.M:
    case actionType.N:
    case actionType.O:
    case actionType.P:
    case actionType.Q:
    case actionType.R:
    case actionType.S:
    case actionType.T:
    case actionType.U:
    case actionType.V:
    case actionType.W:
    case actionType.X:
    case actionType.Y:
    case actionType.Z:
      if (state.isShift) {
        newState = {
          string: state.string + action.payload.cap,
          isShift: state.isShift,
          count: state.count
        }
      } else {
        newState = {
          string: state.string + action.payload.norm,
          isShift: state.isShift,
          count: state.count
        }
      }
      return newState;
    case actionType.BACKSPACE:
      newState = {
        string: state.string.slice(0, state.string.length-1),
        isShift: state.isShift,
        count: state.count
      }
      return newState;
    case actionType.SPACE:
      newState = {
        string: state.string + " ",
        isShift: state.isShift,
        count: state.count
      }
      return newState;
    case actionType.ENTER:
      newState = {
        string: state.string + "\n",
        isShift: state.isShift,
        count: state.count
      }
      return newState;
    case actionType.SHIFT:
      if (state.count === 0) {
        newState = {
          string: state.string,
          isShift: true,
          count: 1
        }
      } else {
        newState = {
          string: state.string,
          isShift: false,
          count: 0
        }
      }
      return newState;
    case actionType.ONE:
    case actionType.TWO:
    case actionType.THREE:
    case actionType.FOUR:
    case actionType.FIVE:
    case actionType.SIX:
    case actionType.SEVEN:
    case actionType.EIGHT:
    case actionType.NINE:
    case actionType.ZERO:
      if (state.isShift) {
        newState = {
          string: state.string + action.payload.spl,
          isShift: state.isShift,
          count: state.count
        }
      } else {
        newState = {
          string: state.string + action.payload.num,
          isShift: state.isShift,
          count: state.count
        }
      }
      return newState;
    default:
      return state;
  }
}

export default alphabetReducer;
