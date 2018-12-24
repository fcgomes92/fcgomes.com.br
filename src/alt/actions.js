import alt from '../alt/alt'

import axios from 'axios';

class GlobalActions {
  fetchFilms() {
    return async dispatch => {
      try {
        const response = await axios.get(`https://swapi.co/api/films/`);
        dispatch(response.data);
      } catch (error) {
        throw error;
      }
    };
  }

  fetchFilm(fid) {

  }

  initState(data) {
    return dispatch => dispatch(data);
  }
}

export default alt.createActions(GlobalActions);