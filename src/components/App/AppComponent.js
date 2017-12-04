import React from 'react';

import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Link from 'react-toolbox/lib/link/Link';

import classNames from 'classnames';

import {translate} from 'react-i18next';

import '../../assets/styles/components/App.css';
import '../../assets/styles/index.css';
import ScrollSpy from "../ScrollSpy/ScrollSpyComponent";
import IconLogo from "../svg/IconLogo";

class AppComponent extends React.Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    state = {
        showAppBar: false,
        scrollSpySections: [],
    };

    componentDidMount() {
        this.setState({
            scrollSpySections: [
                ReactDOM.findDOMNode(this.refs.hero),
                ReactDOM.findDOMNode(this.refs.about),
                ReactDOM.findDOMNode(this.refs.portfolio),
                ReactDOM.findDOMNode(this.refs.contact),
            ]
        })
    }

    handleOnSectionChange = (section) => {
        this.setState({showAppBar: section !== 'hero'});
    };

    render() {
        const {showAppBar, scrollSpySections} = this.state;
        const {t} = this.props;
        const cls = {
            hero: 'hero hero--home full-height',
            banner: 'hero__banner hero__banner--shadow',
            bannerIcon: 'hero__banner__icon',
            bannerText: 'hero__banner__text',
            bannerLinks: 'hero__links',
            section: 'full-height',
            aboutSection: 'full-height about-section',
            aboutTitle: 'about-section__title link link--primary',
            aboutText: 'about-section__text',
            portfolioSection: 'full-height portfolio-section',
            portfolioTitle: 'portfolio-section__title link link--primary',
            portfolioSubtitle: 'portfolio-section__subtitle',
            portfolioCards: 'portfolio-section__cards',
            portfolioCard: 'portfolio-section__card',
            contactSection: 'full-height contact-section',
            contactTitle: 'contact-section__title',
            contactLinks: 'contact-section__links',
            contactLink: 'link link--primary contact-section__links__link',
            contactLinkIconGitHub: 'contact-section__links__link__icon fa fa-github',
            contactLinkIconEmail: 'contact-section__links__link__icon fa fa-envelope',
            contactLinkIconTwitter: 'contact-section__links__link__icon fa fa-twitter',
            content: 'content',
            appBar: classNames('app-bar', {
                'app-bar--show': showAppBar,
            }),
            appBarIcon: 'app-bar__icon',
            link: 'link link--primary',
            linkAccent: 'link link--accent',
        };

        return (
            <main>
                <ScrollSpy defaultSection={'hero'}
                           onSectionChange={this.handleOnSectionChange}
                           sections={scrollSpySections}/>

                <AppBar className={cls.appBar}
                        fixed
                        rightIcon={<IconLogo className={cls.appBarIcon}/>}/>

                <section className={cls.hero} id={'hero'} ref={'hero'}>
                    <IconLogo className={cls.bannerIcon}/>
                    <div className={cls.banner}>
                        <div className={cls.bannerText}><span>{t('bannerText')}</span></div>
                    </div>
                    <div className={cls.bannerLinks}>
                        <Link href={'#about'} label={t('about')} className={cls.link}/>
                        <Link href={'#portfolio'} label={t('portfolio')} className={cls.link}/>
                        <Link href={'#contact'} label={t('contact')} className={cls.link}/>
                    </div>
                </section>

                <section className={cls.aboutSection} id={"about"} ref={"about"}>
                    <Link href={t('aboutTitleLink')}
                          className={cls.aboutTitle}
                          target={"_blank"}
                          rel="noopener noreferrer">
                        <span>{t('aboutTitle')}</span>
                    </Link>
                    <p className={cls.aboutText}>{t('aboutText')}</p>
                </section>

                <section className={cls.portfolioSection} id={"portfolio"} ref={"portfolio"}>
                    <Link href={t('portfolioSectionTitleLink')}
                          target={'_blank'}
                          rel="noopener noreferrer"
                          className={cls.portfolioTitle}>
                        <span>{t('portfolioSectionTitle')}</span>
                    </Link>
                    <div className={cls.portfolioSubtitle}>
                        <span>{t('portfolioSectionSubtitle')}</span>
                    </div>
                    <div className={cls.portfolioCards}>
                        <Card className={cls.portfolioCard}>
                            <CardTitle title={'Full-Stack Developer'}/>
                        </Card>
                        <Card className={cls.portfolioCard}>
                            <CardTitle title={'Designer'}/>
                        </Card>
                        <Card className={cls.portfolioCard}>
                            <CardTitle title={'Witch Doctor'}
                                       subtitle={'Ooh Eeh Ooh Ah Aah Ting Tang Walla Walla Bing'}/>
                        </Card>
                    </div>
                </section>

                <section className={cls.contactSection} id={"contact"} ref={"contact"}>
                    <div className={cls.contactTitle}><span>{t('contactSectionTitle')}</span></div>
                    <div className={cls.contactLinks}>
                        <Link href={t('twitterUrl')} target={'__blank'} className={cls.contactLink} rel="noopener noreferrer">
                            <i className={cls.contactLinkIconTwitter} aria-hidden="true"/>
                            <span>{t('twitterUsername')}</span>
                        </Link>
                        <Link href={t('emailUrl')} target={'__blank'} className={cls.contactLink} rel="noopener noreferrer">
                            <i className={cls.contactLinkIconEmail} aria-hidden="true"/>
                            <span>{t('emailAddress')}</span>
                        </Link>
                        <Link href={t('githubUrl')} target={'__blank'} className={cls.contactLink} rel="noopener noreferrer">
                            <i className={cls.contactLinkIconGitHub} aria-hidden="true"/>
                            <span>{t('githubUsername')}</span>
                        </Link>
                    </div>
                </section>

            </main>
        )
    }
}

export default translate('translations')(AppComponent);
