import * as TYPES from '../constants/actionTypes';
import * as LISTS from '../constants/defaultList';

const initialState = {
  activeList: LISTS.ACTIVE,
  completedList: LISTS.COMPLETED,
};

export default function todolistReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        activeList: state.activeList.concat([action.payload]),
      };

    case TYPES.SET_DONE_TASK:
      return {
        ...state,
        activeList: state.activeList.filter((item) => item !== action.payload),
        completedList: state.completedList.concat([action.payload]),
      };
    case TYPES.ACTIVATE_TASK:
      return {
        ...state,
        completedList: state.completedList.filter(
          (item) => item !== action.payload
        ),
        activeList: state.activeList.concat([action.payload]),
      };

    case TYPES.DELETE_TASK:
      return {
        ...state,
        completedList: state.completedList.filter(
          (item) => item !== action.payload
        ),
      };

    default:
      return state;
  }
}
