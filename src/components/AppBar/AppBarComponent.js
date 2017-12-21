import React from 'react';
import PropTypes from 'prop-types';

import {withRouter} from 'react-router-dom';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import Navigation from 'react-toolbox/lib/navigation/Navigation';

import classNames from "classnames";

import {translate} from 'react-i18next';

import '../../assets/styles/components/AppBar.css';
import IconLogo from "../svg/IconLogo";
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
            iconMenu: 'link link--primary',
        };
        const currentLanguage = i18n.language;

        return (
            <IconMenu icon={<span className={cls.iconMenu}>
                    <span className={'fa fa-flag'}>&nbsp;({currentLanguage})</span>
                </span>}
                      caption={'Language'}
                      position={'topRight'}
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
            navigation: 'menu',
        };

        return (
            <AppBar className={cls.appBar}
                    fixed
                    onLeftIconClick={this.handleLogoClick}
                    leftIcon={<IconLogo className={cls.appBarIcon}/>}>
                <Navigation type="horizontal" className={cls.navigation}>
                    {this.renderLanguageMenu()}
                </Navigation>
            </AppBar>
        )
    }
}

export default withRouter(translate("translations")(AppBarComponent));