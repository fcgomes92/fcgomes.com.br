import React from 'react';
import PropTypes from 'prop-types';

class GoogleAnalyticsComponent extends React.Component {
  static propTypes = {
    trackingId: PropTypes.string.isRequired,
    history: PropTypes.object,
    debug: PropTypes.bool,
  };

  static defaultProps = {
    debug: true,
  };

  componentDidMount() {
    const { debug } = this.props;
    if (!debug) {
      const { history, trackingId } = this.props;
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', trackingId);

      if (history) {
        history.listen((location, action) => {
          try {
            //eslint-disable-next-line
            window.gtag('create', trackingId, 'auto');
            //eslint-disable-next-line
            window.gtag('send', 'pageview', location.pathname);
          } catch (e) {
            console.error(e)
          }
        });
      }
    }
  }

  render() {
    return null;
  }
}

export default GoogleAnalyticsComponent;