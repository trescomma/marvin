import { expect } from 'chai';
import * as actions from '../client/actions/index';

describe('action creators', () => {

  describe('the setCalendar action', () => {
    it('should be a function', () => {
      expect(actions.setCalendar).to.be.a.function;
    });
    it('should have the correct type', () => {
      let action = actions.setCalendar();
      expect(action.type).to.equal(actions.SET_CALENDAR);
    });
  });

  describe('the getMessages action creator', () => {
    it('should be a function', () => {
      expect(actions.getMessages).to.be.a.function;
    });
    it('should have the correct type', () => {
      let action = actions.getMessages();
      expect(action.type).to.equal(actions.GET_MESSAGES);
    });
  });

   describe('the setTracks action creator', () => {
    it('should be a function', () => {
      expect(actions.setTracks).to.be.a.function;
    });
    it('should have the correct type', () => {
      let action = actions.setTracks();
      expect(action.type).to.equal(actions.SET_TRACKS);
    });
  });

 describe('the setLights action creator', () => {
    it('should be a function', () => {
      expect(actions.setLights).to.be.a.function;
    });
    it('should have the correct type', () => {
      let action = actions.setLights();
      expect(action.type).to.equal(actions.SET_LIGHTS);
    });
  });

  describe('the setMovies action creator', () => {
    it('should be a function', () => {
      expect(actions.setMovies).to.be.a.function;
    });
    it('should have the correct type', () => {
      let action = actions.setMovies();
      expect(action.type).to.equal(actions.SET_MOVIES);
    });
  });

   describe('the setTodos action creator', () => {
    it('should be a function', () => {
      expect(actions.setTodos).to.be.a.function;
    });
    it('should have the correct type', () => {
      let action = actions.setTodos();
      expect(action.type).to.equal(actions.SET_TODOS);
    });
  });

    describe('the setWeather action creator', () => {
    it('should be a function', () => {
      expect(actions.setWeather).to.be.a.function;
    });
    it('should have the correct type', () => {
      let action = actions.setWeather();
      expect(action.type).to.equal(actions.SET_WEATHER);
    });
  });






