import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: null,
  };

  render() {
    const title = this.props.title ? `${this.props.title} | ` : '';
    return <title>{title}FCG</title>;
  }
}