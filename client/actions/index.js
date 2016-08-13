export const SET_EVENTS = 'SET_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const USER_SET = 'USER_SET';
export const SET_CALENDAR = 'SET_CALENDAR';
export const SET_TRACKS = 'SET_TRACKS';

export function setCalendar(events) {
  return {
    type: SET_CALENDAR,
    payload: events
  };
}

export function setEvents (event) {
  return {
    type: SET_EVENTS,
    payload: event
  };
}

export function setTracks (tracks) {
  return {
    type: SET_TRACKS,
    payload: tracks
  };
}