import * as TYPES from '../constants/actionTypes';

const initialState = {
  previousRate: {},
  currentRate: {},
  nextRate: {},
};

export default function exchangeReducer(state = initialState, action) {
  let tmp;

  switch (action.type) {
    case TYPES.SET_RATES:
      return {
        ...state,
        nextRate: action.payload[0],
        currentRate: action.payload[1],
        previousRate: action.payload[2],
      };

    case TYPES.SET_PREVIOUS_RATE:
      tmp = state.nextRate;
      return {
        ...state,
        nextRate: state.currentRate,
        currentRate: state.previousRate,
        previousRate: tmp,
      };

    case TYPES.SET_NEXT_RATE:
      tmp = state.previousRate;
      return {
        ...state,
        previousRate: state.currentRate,
        currentRate: state.nextRate,
        nextRate: state.previousRate,
      };

    default:
      return state;
  }
}
