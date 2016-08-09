export const SET_EVENTS = 'SET_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const USER_SET = 'USER_SET';

export function setEvents (event) {
  return {
    type: SET_EVENTS,
    payload: event
  };
}
