import React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'

import { JssProvider, SheetsRegistry } from 'react-jss'

import GlobalStore, { __NEXT_REDUX_STORE__ } from '../src/alt/stores/GlobalStore';

export default class JssDocument extends Document {
  static getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const page = ctx.renderPage(App => props => (
      <JssProvider registry={registry}>
        <App {...props} />
      </JssProvider>
    ));

    return {
      ...page,
      registry,
    }
  }


  render() {
    return (
      <html>
      <Head>
        <style id="server-side-styles">
          {this.props.registry.toString()}
        </style>
        <script
          id={__NEXT_REDUX_STORE__}
          dangerouslySetInnerHTML={{
            __html: `window['${__NEXT_REDUX_STORE__}'] = ${JSON.stringify(GlobalStore.getState())}`,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      </html>
    )
  }
}