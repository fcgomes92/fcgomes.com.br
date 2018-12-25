const isServer = typeof window === 'undefined';

function mapStores(Store){
  console.log(Store)
  Store.initStore(Store.getState());
}

export default (App, Stores) => {
  return class AppWithStore extends React.Component {
    static async getInitialProps(appContext) {
      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }
      if (isServer) {
        Stores.map(mapStores);
      }
      return { ...appProps }
    }

    render() {
      return <App {...this.props} />
    }
  }
}