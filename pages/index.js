import React from 'react';

import Head from 'next/head';

import connectToStores from 'alt-utils/lib/connectToStores'

import Header from '../src/components/Header/Header';
import Title from '../src/components/Title/Title';
import GlobalActions from '../src/alt/actions/GlobalActions';
import GlobalStore from '../src/alt/stores/GlobalStore';
import LoaderComponent from '../src/components/Loader/LoaderComponent';

class _IsolatedComponent extends React.Component {
  state = {};

  static getStores = () => [GlobalStore];

  static getPropsFromStores = () => GlobalStore.getState();

  renderPostLine = (movieId, idx) => {
    const movie = this.props.films.items[movieId];
    return (
      <li key={idx}>{movie.title}</li>
    )
  };

  render() {
    if (this.props.loading) {
      return <LoaderComponent />
    }
    return (
      <>
        <p>Movies:</p>
        <ul>
          {this.props.films.ids.map(this.renderPostLine)}
        </ul>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    )
  }
}

const IC = connectToStores(_IsolatedComponent);


class Index extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      await GlobalActions.fetchFilms();
    }
    return {
      serverInitialized: Boolean(req),
      namespacesRequired: ['common'],
    }
  }

  state = {
    loadingFilms: false,
  };

  constructor(props) {
    super(props);
    this.serverInitialized = props.serverInitialized;
  }

  componentDidMount() {
    if (!this.serverInitialized) {
      this.handleFetchData();
    }
  }

  handleFetchData = async () => {
    await this.setState({ loadingFilms: true });
    await GlobalActions.fetchFilms();
    await this.setState({ loadingFilms: false });
  };

  render() {
    return (
      <>
        <Head>
          <Title title="HOME" />
        </Head>
        <Header />
        <IC loading={this.state.loadingFilms} />
      </>
    );
  }
}

export default Index;