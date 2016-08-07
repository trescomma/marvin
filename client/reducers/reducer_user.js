import { USER_SET } from '../actions/index.js';
import { cloneDeep } from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_SET:
    console.log('DATA', action.options.data);
    console.log('WOO ACTION STATE',state);

      return cloneDeep(action.options.data);
  }

  return state;
};