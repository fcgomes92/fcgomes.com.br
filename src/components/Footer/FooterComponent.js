import React from 'react';

import PropTypes from 'prop-types';

import {translate} from 'react-i18next';
import {VERSION} from "../../settings/settings";

class FooterComponent extends React.Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    render() {
        const {t} = this.props;
        const cls = {
            linkAccent: 'link link--accent',
            footer: 'footer',
        };

        return (
            <footer className={cls.footer}>
                <span>{t('version')}:&nbsp;{VERSION}</span>
            </footer>
        )
    }
}

export default translate('translations')(FooterComponent);