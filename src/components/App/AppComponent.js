import React from 'react';

import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';

import classNames from 'classnames';

import {translate} from 'react-i18next';

import SVGCat from '../../assets/svg/cat.svg';
import '../../assets/styles/components/App.css';
import '../../assets/styles/index.css';
import ScrollSpy from "../ScrollSpy/ScrollSpyComponent";
import IconLogo from "../svg/IconLogo";
import {getBlogPosts, getPortfolioPosts} from "../../actions";
import LoaderComponent from "../Loader/LoaderComponent";
import {VERSION} from "../../settings/settings";

class AppComponent extends React.Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
    };

    state = {
        showAppBar: false,
        scrollSpySections: [],
        loadingLast5BlogPosts: true,
        blogPosts: [],
        loadingLast5PortfolioPosts: true,
        portfolioPosts: [],
        currentLanguage: 'en',
    };

    componentDidMount() {
        const {i18n} = this.props;

        this.setState({
            scrollSpySections: [
                ReactDOM.findDOMNode(this.refs.hero),
                ReactDOM.findDOMNode(this.refs.about),
                ReactDOM.findDOMNode(this.refs.portfolio),
                ReactDOM.findDOMNode(this.refs.contact),
            ],
            currentLanguage: i18n.language,
        });

        this.handleLoadBlogPosts().then(() => {
        }).catch(error => console.error(error));
        this.handleLoadPortfolioPosts().then(() => {
        }).catch(error => console.error(error));
    }

    handleOnSectionChange = (section) => {
        if (section !== 'hero' && !this.state.showAppBar) {
            this.setState({showAppBar: true});
        } else if (section === 'hero' && this.state.showAppBar) {
            this.setState({showAppBar: false});
        }
    };

    handleLoadBlogPosts = async () => {
        let response = await getBlogPosts();
        await this.setState({
            loadingLast5BlogPosts: false,
            blogPosts: [...response],
        });
    };

    handleLoadPortfolioPosts = async () => {
        let response = await getPortfolioPosts();
        await this.setState({
            loadingLast5PortfolioPosts: false,
            portfolioPosts: [...response],
        });
    };

    handleChangeLanguage = (language) => {
        const {i18n} = this.props;
        i18n.changeLanguage(language);
        this.setState({
            currentLanguage: language,
        })
    };

    renderPortfolioSection = () => {
        const {t} = this.props;
        const {loadingLast5PortfolioPosts, portfolioPosts} = this.state;

        const cls = {
            portfolioCards: 'portfolio-section__cards',
            portfolioCard: 'portfolio-section__card animated fadeInDown',
            portfolioCardImage: 'portfolio-section__card__image',
            portfolioCardExcerpt: 'portfolio-section__card__excerpt',
            portfolioLoading: 'portfolio-section__loading',
        };

        if (loadingLast5PortfolioPosts) {
            return (
                <div className={cls.portfolioLoading}>
                    <LoaderComponent accent/>
                    <span>{t('loading')}</span>
                </div>
            );
        }
        if (portfolioPosts.length === 0) {
            return (
                <div className={cls.portfolioCards}>
                    <Card key={`__portfolio_post_card__000`}
                          className={classNames(cls.portfolioCard, {
                              [`portfolio-section__cards__card--delay-animation-0s`]: true,
                          })}>
                        <CardTitle title={t('errorLoadingPortfolioPostsTitle')}/>
                        <CardMedia image={SVGCat}
                                   aspectRatio="square"
                                   className={cls.portfolioCardImage}/>
                        <CardText>
                            <p>{t('errorLoadingPortfolioPosts')}</p>
                        </CardText>
                    </Card>
                </div>
            );
        } else {
            return (
                <div className={cls.portfolioCards}>
                    {portfolioPosts.map((post, idx) => {
                        return (
                            <Card key={`__portfolio_post_card__${idx}`}
                                  className={classNames(cls.portfolioCard, {
                                      [`portfolio-section__cards__card--delay-animation-0s`]: true,
                                  })}>
                                <CardTitle title={post.title}/>
                                <CardMedia image={post.featured_image}
                                           aspectRatio="square"
                                           className={cls.portfolioCardImage}/>
                                <CardText className={cls.portfolioCardExcerpt}>
                                    <p dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
                                </CardText>
                                <CardActions>
                                    <Button label={t('readMore')} flat primary/>
                                </CardActions>
                            </Card>
                        )
                    })}
                </div>
            )
        }
    };

    renderBlogSection = () => {
        const {t} = this.props;
        const {loadingLast5BlogPosts, blogPosts} = this.state;

        const cls = {
            blogSectionCards: 'blog-section__cards',
            blogSectionCard: 'blog-section__cards__card animated fadeInDown',
            blogSectionCardImage: 'blog-section__cards__card__image',
            blogSectionCardExcerpt: 'blog-section__cards__card__excerpt',
            blogSectionLoading: 'blog-section__loading',
        };

        if (loadingLast5BlogPosts) {
            return (
                <div className={cls.blogSectionLoading}>
                    <LoaderComponent accent/>
                    <span>{t('loading')}</span>
                </div>
            );
        }
        if (blogPosts.length === 0) {
            return (
                <div className={cls.blogSectionCards}>
                    <Card key={`__blog_post_card__000`}
                          className={classNames(cls.blogSectionCard, {
                              [`blog-section__cards__card--delay-animation-0s`]: true,
                          })}>
                        <CardMedia image={SVGCat}
                                   aspectRatio="square"
                                   className={cls.blogSectionCardImage}/>
                        <CardTitle title={t('errorLoadingBlogPostsTitle')}/>
                        <CardText>
                            <p>{t('errorLoadingBlogPosts')}</p>
                        </CardText>
                    </Card>
                </div>
            );
        } else {
            return (
                <div className={cls.blogSectionCards}>
                    {blogPosts.map((post, idx) => {
                        return (
                            <Card key={`__blog_post_card_${idx}`}
                                  className={classNames(cls.blogSectionCard, {
                                      [`blog-section__cards__card--delay-animation-${idx}s`]: true,
                                  })}>
                                <CardMedia image={post.featured_image}
                                           aspectRatio="square"
                                           className={cls.blogSectionCardImage}/>
                                <CardTitle title={post.title}/>
                                <CardText className={cls.blogSectionCardExcerpt}>
                                    <p dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
                                </CardText>
                                <CardActions>
                                    <Button label={t('readMore')} flat primary/>
                                </CardActions>
                            </Card>
                        )
                    })}
                </div>
            )
        }
    };

    renderLanguageMenu() {
        const {t} = this.props;
        const cls = {
            menuItem: 'menu__item',
            link: 'link link--primary',
        };
        const {currentLanguage} = this.state;

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

    render() {
        const {showAppBar, scrollSpySections} = this.state;
        const {t} = this.props;
        const cls = {
            main: 'animated fadeIn',
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
            contactSection: 'full-height contact-section',
            contactTitle: 'contact-section__title link link--primary',
            contactLinks: 'contact-section__links',
            contactLink: 'link link--primary contact-section__links__link',
            contactLinkIconGitHub: 'contact-section__links__link__icon fa fa-github',
            contactLinkIconEmail: 'contact-section__links__link__icon fa fa-envelope',
            contactLinkIconTwitter: 'contact-section__links__link__icon fa fa-twitter',
            blogSection: 'full-height blog-section',
            blogSectionTitle: 'blog-section__title link link--primary',
            content: 'content',
            appBar: classNames('app-bar', {
                'app-bar--show': showAppBar,
            }),
            appBarIcon: 'app-bar__icon',
            link: 'link link--primary',
            linkAccent: 'link link--accent',
            footer: 'footer',
        };

        return (
            <main className={cls.main}>
                <ScrollSpy defaultSection={'hero'}
                           onSectionChange={this.handleOnSectionChange}
                           sections={scrollSpySections}/>

                <AppBar className={cls.appBar}
                        fixed
                        rightIcon={<IconLogo className={cls.appBarIcon}/>}>
                    {this.renderLanguageMenu()}
                </AppBar>

                <section className={cls.hero} id={'hero'} ref={'hero'}>
                    <IconLogo className={cls.bannerIcon}/>
                    <div className={cls.banner}>
                        <div className={cls.bannerText}><span>{t('bannerText')}</span></div>
                    </div>
                    <div className={cls.bannerLinks}>
                        <Link href={'#about'} label={t('about')} className={cls.link}/>
                        <Link href={'#portfolio'} label={t('portfolio')} className={cls.link}/>
                        <Link href={'#contact'} label={t('contact')} className={cls.link}/>
                        <Link href={'#blog'} label={t('blogPosts')} className={cls.link}/>
                    </div>
                </section>

                <section className={cls.aboutSection} id={"about"} ref={"about"}>
                    <Link href={t('aboutTitleLink')}
                          className={cls.aboutTitle}
                          target={"_blank"}
                          rel="noopener noreferrer">
                        <span>{t('aboutTitle')}</span>
                    </Link>
                    <p className={cls.aboutText} dangerouslySetInnerHTML={{
                        __html: t('aboutText0', {
                            twitterLink: `<a href="${t('twitterUrl')}"
                            class="${cls.link}"
                            rel="noopener noreferrer"
                            target="_blank">${t('twitterUsername')}</a>`,
                            portfolioLink: `<a href="#portfolio"
                            class="${cls.link}">${t('portfolio')}</a>`,
                            contactLink: `<a href="#contact"
                            class="${cls.link}"">${t('contact')}</a>`,
                            blogPostsLink: `<a href="#blog"
                            class="${cls.link}"">${t('blogPosts')}</a>`,
                        })
                    }}/>
                    <p className={cls.aboutText} dangerouslySetInnerHTML={{
                        __html: t('aboutText1', {
                            reactLink: `<a href="//reactjs.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                            class="${cls.link}">${t('react')}</a>`,
                            reactToolboxLink: `<a href="//react-toolbox.io/"
                            rel="noopener noreferrer"
                            target="_blank"
                            class="${cls.link}"">${t('reactToolbox')}</a>`,
                        })
                    }}/>
                    <p className={cls.aboutText}>{t('aboutText2')}</p>
                </section>

                <section className={cls.portfolioSection} id={"portfolio"} ref={"portfolio"}>
                    <Link href={t('portfolioSectionTitleLink')}
                          target={'_blank'}
                          rel="noopener noreferrer"
                          className={cls.portfolioTitle}>
                        <span>{t('portfolioSectionTitle')}</span>
                    </Link>
                    {this.renderPortfolioSection()}
                </section>

                <section className={cls.blogSection} id={"blog"}>
                    <Link href={t('blogSectionTitleLink')}
                          target={'_blank'}
                          rel="noopener noreferrer"
                          className={cls.blogSectionTitle}>
                        <span>{t('blogSectionTitle')}</span>
                    </Link>
                    {this.renderBlogSection()}
                </section>

                <section className={cls.contactSection} id={"contact"} ref={"contact"}>
                    <Link href={t('contactSectionTitleLink')}
                          target={'_blank'}
                          rel="noopener noreferrer"
                          className={cls.contactTitle}>
                        <span>{t('contactSectionTitle')}</span>
                    </Link>
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
                <footer className={cls.footer}>
                    <a className={cls.linkAccent} href='https://www.freepik.com/free-vector/several-dog-and-cat-emoticons-in-flat-design_1002049.htm'>Designed by Freepik</a>
                    <span>{t('version')}:&nbsp;{VERSION}</span>
                </footer>
            </main>
        )
    }
}

export default translate('translations')(AppComponent);
