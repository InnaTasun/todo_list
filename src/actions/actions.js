import * as TYPES from '../constants/actionTypes';
import ratesFilter from '../ratesFilter';
import { EXCHANGE_RATES } from '../constants/urls';

export function addTask(task) {
  return {
    type: TYPES.ADD_TASK,
    payload: task,
  };
}

export function setDoneTask(task) {
  return {
    type: TYPES.SET_DONE_TASK,
    payload: task,
  };
}

export function deleteTask(task) {
  return {
    type: TYPES.DELETE_TASK,
    payload: task,
  };
}

export function activateTask(task) {
  return {
    type: TYPES.ACTIVATE_TASK,
    payload: task,
  };
}

export function setPreviousRate() {
  return {
    type: TYPES.SET_PREVIOUS_RATE,
  };
}

export function setNextRate() {
  return {
    type: TYPES.SET_NEXT_RATE,
  };
}

export function getRates() {
  return (dispatch) => {
    fetch(EXCHANGE_RATES)
      .then((response) => response.json())
      .then((ratesData) => {
        dispatch({ type: TYPES.SET_RATES, payload: ratesFilter(ratesData) });
      });
  };
}
