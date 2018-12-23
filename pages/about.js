import React from 'react';

import PropTypes from 'prop-types';

import Head from 'next/head';

import Header from '../src/components/Header/Header';
import Title from '../src/components/Title/Title';

class About extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }

  static propTypes = {};

  state = {};

  render() {
    return (
      <>
        <Head>
          <Title title="ABOUT" />
        </Head>
        <div>
          <Header/>
          <h1>About</h1>
        </div>
      </>
    );
  }
}

export default About;