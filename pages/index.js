import React from 'react';

import PropTypes from 'prop-types';

import Head from 'next/head';

import Header from '../src/components/Header/Header';

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
          <title>ABOUT</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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