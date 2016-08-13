import { SET_TODOS } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case SET_TODOS;
      return action.payload;
  }

  return state;
};