import * as TYPES from '../constants/actionTypes';

const initialState = {
  prevRate: {},
  curRate: {},
  nextRate: {},
};

export default function exchangeReducer(state = initialState, action) {
  let tmp;

  switch (action.type) {
    case TYPES.SET_RATES:
      return {
        ...state,
        nextRate: action.payload[0],
        curRate: action.payload[1],
        prevRate: action.payload[2],
      };

    case TYPES.PREVIOUS_RATE:
      tmp = state.nextRate;
      return {
        ...state,
        nextRate: state.curRate,
        curRate: state.prevRate,
        prevRate: tmp,
      };

    case TYPES.NEXT_RATE:
      tmp = state.prevRate;
      return {
        ...state,
        prevRate: state.curRate,
        curRate: state.nextRate,
        nextRate: state.prevRate,
      };

    default:
      return state;
  }
}
