import React from 'react'

import App, { Container } from 'next/app'
import Head from 'next/head';

import injectSheet from 'react-jss'

import registerServiceWorker from '../src/registerServiceWorker';
import I18n from '../src/i18n'
import Title from '../src/components/Title/Title';
import withStore from '../lib/withStore';
import GlobalStore from '../src/alt/stores/GlobalStore';

const styles = {
  '@global html, @global body': {
    fontFamily: 'Roboto, serif',
    fontSize: '10px',
    margin: 0,
    padding: 0,
  },
};

class MyApp extends App {
  static async getInitialProps() {
    return {
      namespacesRequired: [],
    }
  }

  componentDidMount() {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style)
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#212121" />
          <meta name="msapplication-TileColor" content="#212121" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <meta name="msapplication-TileImage" content="/static/icons/ms-icon-144x144.png" />

          {/*<link rel="manifest" href="/static/manifest.json" />*/}
          <link rel="shortcut icon" href="/static/favicon.ico" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
          <script src="https://use.fontawesome.com/f16b9b8492.js" async defer />

          <script async src="//www.googletagmanager.com/gtag/js?id=UA-86301706-1" />

          <Title />
          <meta name="description" content="FCG" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta property="og:url" content="https://fcgomes.com/" />
          <meta property="og:title" content="FCG" />
          <meta property="og:image" content="https://cms.fcgomes.com/wp-content/uploads/2017/12/logo-plain.jpeg" />
          <meta name="ogType" property="og:type" content="website" />
          <meta property="og:description" content="A website about software development." />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

const I18nApp = I18n.appWithTranslation(MyApp);
const StyledApp = injectSheet(styles)(I18nApp);
export default withStore(StyledApp, [GlobalStore]);

registerServiceWorker();
