import GlobalStore from '../src/alt/stores';
import GlobalActions from '../src/alt/actions';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const INITIAL_DATA = {
  films: {
    ids: [],
    items: {},
    currentFilm: {},
  },
};


export function getOrCreateStore(initialState = INITIAL_DATA) {
  if (isServer) {
    return initialState;
  }

  if (!window[__NEXT_REDUX_STORE__] || window[__NEXT_REDUX_STORE__] === INITIAL_DATA) {
    window[__NEXT_REDUX_STORE__] = initialState;
  }

  return window[__NEXT_REDUX_STORE__]
}


export default App => {
  return class AppWithStore extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      // Provide the store to getInitialProps of pages
      appContext.ctx.globalStore = getOrCreateStore();

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialGlobalState: GlobalStore.getState(),
      }
    }

    constructor(props) {
      super(props);
      GlobalActions.initState(props.initialGlobalState);
    }

    render() {
      return <App {...this.props} />
    }
  }
}