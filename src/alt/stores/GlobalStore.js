import alt from '../alt';
import GlobalActions from '../actions/GlobalActions';
import { isServer } from '../../settings/const';

export const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

class GlobalStore {
  static INITIAL_DATA = {
    films: {
      ids: [],
      items: {},
      currentFilm: {},
    },
  };

  constructor() {
    this.state = { ...GlobalStore.initStore() };
    this.bindActions(GlobalActions);
  }

  static initStore(data = GlobalStore.INITIAL_DATA) {
    if (isServer) {
      return data;
    } else {
      return window[__NEXT_REDUX_STORE__] ? window[__NEXT_REDUX_STORE__] : data;
    }
  }

  fetchFilms(data) {
    this.state.films = data.results.reduce((acc, result) => {
      if (!acc.ids.includes(result.url)) {
        acc.ids = [...acc.ids, result.url];
      }
      acc.items[result.url] = { ...result };
      return acc;
    }, this.state.films);
  }
}

export default alt.createStore(GlobalStore, 'GlobalStore');