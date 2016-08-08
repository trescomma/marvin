import { SET_EVENTS } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload;
  }

  return state;
};