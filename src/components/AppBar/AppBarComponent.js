import React from 'react';
import PropTypes from 'prop-types';

import {withRouter} from 'react-router-dom';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import IconLogo from "../svg/IconLogo";

import classNames from "classnames";

import {translate} from 'react-i18next';
import {URLS} from "../../urls";

class AppBarComponent extends React.Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
        show: PropTypes.bool,
    };

    static defaultProps = {
        show: true,
    };

    handleChangeLanguage = (language) => {
        const {i18n} = this.props;
        i18n.changeLanguage(language);
    };

    renderLanguageMenu() {
        const {t, i18n} = this.props;
        const cls = {
            menuItem: 'menu__item',
            link: 'link link--primary',
        };
        const currentLanguage = i18n.language;

        return (
            <IconMenu icon={<span className={cls.link}>
                    <span className={'fa fa-flag'}>&nbsp;({currentLanguage})</span>
                </span>}
                      caption={'TEST'}
                      position={'topLeft'}
                      menuRipple
                      onSelect={this.handleChangeLanguage}
                      selectable
                      selected={currentLanguage}>
                <MenuItem value='en' caption={t('languageEN')} className={cls.menuItem}/>
                <MenuItem value='pt-BR' caption={t('languagePTBR')} className={cls.menuItem}/>
            </IconMenu>
        )
    }

    handleLogoClick = () => {
        this.props.history.push(URLS.base());
    };

    render() {
        const {show} = this.props;
        const cls = {
            appBar: classNames('app-bar', {
                'app-bar--show': show,
            }),
            appBarIcon: 'app-bar__icon',
        };

        return (
            <AppBar className={cls.appBar}
                    fixed
                    onRightIconClick={this.handleLogoClick}
                    rightIcon={<IconLogo className={cls.appBarIcon}/>}>
                {this.renderLanguageMenu()}
            </AppBar>
        )
    }
}

export default withRouter(translate("translations")(AppBarComponent));