import React from 'react';

import PropTypes from 'prop-types';

import Head from 'next/head';

import Header from '../src/components/Header/Header';
import axios from 'axios';

class About extends React.Component {
  static async getInitialProps(props) {
    const showId = props.query.id;
    const res = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
    return {
      show: { ...res.data },
      namespacesRequired: ['common'],
    }
  }

  static propTypes = {
    show: PropTypes.object,
  };
  static defaultProps = {
    show: {},
  };

  state = {};

  render() {
    return (
      <>
        <Head>
          <title>SHOW DETAILS</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
          <Header />
          <div>
            <p>{this.props.show.name}</p>
            <p>{this.props.show.type}</p>
            <p>{this.props.show.language}</p>
            <p>{this.props.show.status}</p>
          </div>
        </div>
      </>
    );
  }
}

export default About;