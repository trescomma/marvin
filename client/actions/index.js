export const SET_EVENTS = 'SET_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const USER_SET = 'USER_SET';
export const SET_CALENDAR = 'SET_CALENDAR';
export const SET_TRACKS = 'SET_TRACKS';
export const SET_LIGHTS = 'SET_LIGHTS';
export const SET_TODOS = 'SET_TODOS';

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

export function setLights (lights) {
  return {
    type: SET_LIGHTS,
    payload: lights
  };
}

export function setTodos (todos) {
  return {
    type: SET_TODOS,
    payload: todos
  };
}