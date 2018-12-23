import React from 'react';

import Head from 'next/head';

import Header from '../src/components/Header/Header';
import Title from '../src/components/Title/Title';
import LoaderComponent from '../src/components/Loader/LoaderComponent';

class About extends React.Component {
  static async getInitialProps() {
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
        <div>
          <Header />
        </div>
      </>
    );
  }
}

export default About;