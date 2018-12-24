import alt from './alt';
import GlobalActions from './actions';

import { getOrCreateStore } from '../../lib/withStore';

class GlobalStore {
  constructor() {
    console.log('===STORE===');
    this.initState(getOrCreateStore());
    this.bindActions(GlobalActions);
  }

  initState(data) {
    this.state = { ...data };
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