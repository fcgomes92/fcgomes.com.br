import React from 'react';

import Head from 'next/head';

import Header from '../src/components/Header/Header';
import Title from '../src/components/Title/Title';

import AltContainer from 'alt-container';
import GlobalActions from '../src/alt/actions';
import GlobalStore from '../src/alt/stores';

class _IsolatedComponent extends React.Component {
  state = {};

  renderPostLine = (movieId, idx) => {
    const movie = this.props.films.items[movieId];
    return (
      <li key={idx}>{movie.title}</li>
    )
  };

  render() {
    console.log('IC:', GlobalStore.getState());
    return (
      <AltContainer store={GlobalStore}>
        <p>Movies:</p>
        <ul>
          {/*{this.props.films.ids.map(this.renderPostLine)}*/}
        </ul>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </AltContainer>
    )
  }
}

const IC = _IsolatedComponent;


class Index extends React.Component {
  static async getInitialProps() {
    await GlobalActions.fetchFilms();
    return {
      namespacesRequired: ['common'],
    }
  }

  render() {
    return (
      <>
        <Head>
          <Title title="HOME" />
        </Head>
        <Header />
        <IC />
      </>
    );
  }
}

export default Index;