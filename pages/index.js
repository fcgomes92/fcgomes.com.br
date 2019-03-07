import React from 'react';

import '../static/styles/index.scss';

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <label className="header-menu">
          <input type="checkbox" className="header-menu__input" />
          <div className="header-menu__button">
            <div className="header-menu__button__line header-menu__button__line--line-1" />
            <div className="header-menu__button__line header-menu__button__line--line-2" />
            <div className="header-menu__button__line header-menu__button__line--line-3" />
          </div>
          <ul className="header-menu__items">
            <li className="header-menu__items__item"><a className="link" href="google.com">HOME</a></li>
            <li className="header-menu__items__item"><a className="link" href="google.com">PROJECT</a></li>
            <li className="header-menu__items__item"><a className="link" href="google.com">ABOUT</a></li>
          </ul>
        </label>
        <section className="section">
        </section>
      </>
    );
  }
}