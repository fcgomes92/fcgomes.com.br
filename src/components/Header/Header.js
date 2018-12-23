import React from 'react';

import { Link } from '../../../routes'
import I18n from '../../i18n'

export default class Header extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={() => {
            console.log(I18n.i18n.language);
            I18n.i18n.changeLanguage(I18n.i18n.language === 'en' ? 'ptBR' : 'en')
          }}
        >
          {<I18n.Trans i18nKey="changeLanguage" />}
        </button>
        <Link route="/">
          <a>HOME</a>
        </Link>
        <Link route="/about">
          <a>About</a>
        </Link>
      </>
    )
  }
}