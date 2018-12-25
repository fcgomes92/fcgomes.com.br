import React from 'react';

import { Link } from '../../../routes';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div>HEADER</div>
        <Link route="index">
          <a>HOME</a>
        </Link>
        <Link route="about">
          <a>ABOUT</a>
        </Link>
      </>
    )
  }
}