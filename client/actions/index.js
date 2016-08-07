import axios from 'axios'

export const SET_EVENTS = 'SET_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const USER_SET = 'USER_SET';

export function setEvents (event) {
  return {
    type: SET_EVENTS,
    payload: event
  };
}

export function searchEvents (search) {
  console.log(search);
    axios.get('https://www.eventbriteapi.com/v3/events/search/?categories=' + search.category + '&token=UQOCU57TT67WA4W7V6RE'
    )
    .then(function(data) {
      console.log(data);
    })
}
