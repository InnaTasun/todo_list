import * as TYPES from '../constants/actionTypes';
import ratesFilter from '../ratesFilter';
import {EXCHANGE_RATES} from '../constants/urls'

export function add(task) {
  return {
    type: TYPES.ADD_TASK,
    payload: task,
  };
}

export function done(task) {
  return {
    type: TYPES.DONE_TASK,
    payload: task,
  };
}

export function del(task) {
  return {
    type: TYPES.DEL_TASK,
    payload: task,
  };
}

export function activ(task) {
  return {
    type: TYPES.ACTIVATE_TASK,
    payload: task,
  };
}

export function setRates(rates) {
  return {
    type: TYPES.SET_RATES,
    payload: ratesFilter(rates),
  };
}

export function prev() {
  return {
    type: TYPES.PREVIOUS_RATE,
  };
}

export function next() {
  return {
    type: TYPES.NEXT_RATE,
  };
}

export function getRates() {
  return ((dispatch) => {
    fetch(EXCHANGE_RATES)
      .then((response) => response.json())
      .then((dataJSON) => dispatch(setRates(dataJSON)));
  });
}
