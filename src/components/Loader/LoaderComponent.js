import React, { Component } from 'react';

import PropTypes from 'prop-types';

import injectSheet from 'react-jss'

import classNames from 'classnames';

const styles = {
  loader: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
  },
  loaderRipple: {
    position: 'absolute',
    border: `.4rem solid #fff`,
    opacity: 1,
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    animation: 'rippleAnimation 1.8s cubic-bezier(0, 0.2, 0.8, 1) infinite',

    '&:nth-child(2)': {
      animationDelay: '-0.5s',
    },
    '&$white': {
      borderColor: '#fff',
    },
  },

  white: {},

  '@keyframes rippleAnimation': {
    '0%': {
      width: 0,
      height: 0,
      opacity: 1,
    },
    '100%': {
      width: '100%',
      height: '100%',
      opacity: 0,
    },
  },
};

class LoaderComponent extends Component {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    show: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    size: '2rem',
    classNames: '',
    show: true,
    color: 'white',
  };

  render() {
    const { color, classes, className, show, size } = this.props;
    const cls = {
      loader: classNames(classes.loader, classes[color], className),
      ripple: classNames(classes.loaderRipple, classes[color]),
    };
    return (
      <div
        className={cls.loader} style={{
        display: show
          ? 'block'
          : 'none',
        width: size,
        height: size,
      }}
      >
        <div className={cls.ripple} />
        <div className={cls.ripple} />
        <div className={cls.ripple} />
      </div>
    )
  }
}

export default injectSheet(styles)(LoaderComponent);
