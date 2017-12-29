import React from 'react';

import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';

import {Link as LinkDOM} from 'react-router-dom';

import classNames from 'classnames';

import {translate} from 'react-i18next';

import SVGCat from '../../assets/svg/cat.svg';
import '../../assets/styles/components/App.css';
import '../../assets/styles/index.css';
import ScrollSpy from "../ScrollSpy/ScrollSpyComponent";
import IconLogo from "../svg/IconLogo";

import AppBarComponent from "../AppBar/AppBarComponent";
import LoaderComponent from "../Loader/LoaderComponent";
import FooterComponent from "../Footer/FooterComponent";
import {URLS} from "../../urls";

class AppComponent extends React.Component {
    static AMOUNT_OF_BLOG_POSTS = 5;

    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
        history: PropTypes.object,
        location: PropTypes.object,
        blogPosts: PropTypes.object,
        loadBlogPosts: PropTypes.func,
    };

    static defaultProps = {};

    state = {
        showAppBar: false,
        scrollSpySections: [],
    };

    componentDidMount() {
        window.scrollTo(0, 0);

        this.setState({
            scrollSpySections: [
                ReactDOM.findDOMNode(this.refs.hero),
                ReactDOM.findDOMNode(this.refs.about),
                ReactDOM.findDOMNode(this.refs.contact),
            ],
        });

        this.handleLoadBlogPosts();
    }

    handleOnSectionChange = (section) => {
        if (section !== 'hero' && !this.state.showAppBar) {
            this.setState({showAppBar: true});
        } else if (section === 'hero' && this.state.showAppBar) {
            this.setState({showAppBar: false});
        }
    };

    handleLoadBlogPosts = () => {
        if (this.props.loadBlogPosts) {
            this.props.loadBlogPosts(AppComponent.AMOUNT_OF_BLOG_POSTS);
        }
    };

    renderBlogSection = () => {
        const {t, blogPosts} = this.props;

        if (!blogPosts) {
            return null;
        }

        const cls = {
            blogSectionCards: 'blog-section__cards',
            blogSectionCard: 'blog-section__cards__card animated fadeInDown',
            blogSectionCardImage: 'blog-section__cards__card__image',
            blogSectionCardExcerpt: 'blog-section__cards__card__excerpt',
            blogSectionLoading: 'blog-section__loading',
        };

        if (blogPosts.loading) {
            return (
                <div className={cls.blogSectionLoading}>
                    <LoaderComponent accent/>
                    <span>{t('loading')}</span>
                </div>
            );
        }
        if (blogPosts.error) {
            return (
                <div className={cls.blogSectionCards}>
                    <Card key={`__blog_post_card__000`}
                          className={classNames(cls.blogSectionCard, {
                              [`blog-section__cards__card--delay-animation-0s`]: true,
                          })}>
                        <CardMedia image={SVGCat}
                                   aspectRatio="square"
                                   className={cls.blogSectionCardImage}>
                            <small>
                                <Link href={'https://www.freepik.com/free-vector/several-dog-and-cat-emoticons-in-flat-design_1002049.htm'}
                                      target={'__blank'}
                                      className={cls.linkAccent}
                                      rel="noopener noreferrer">Designed by Freepik</Link>
                            </small>
                        </CardMedia>
                        <CardTitle title={t('errorLoadingBlogPostsTitle')}/>
                        <CardText>
                            <p>{t('errorLoadingBlogPosts')}</p>
                        </CardText>
                    </Card>
                </div>
            );
        } else if (blogPosts.ids.length === 0) {
            return (
                <div className={cls.blogSectionCards}>
                    <Card key={`__blog_post_card__000`}
                          className={classNames(cls.blogSectionCard, {
                              [`blog-section__cards__card--delay-animation-0s`]: true,
                          })}>
                        <CardMedia image={SVGCat}
                                   aspectRatio="square"
                                   className={cls.blogSectionCardImage}>
                            <small>
                                <Link href={'https://www.freepik.com/free-vector/several-dog-and-cat-emoticons-in-flat-design_1002049.htm'}
                                      target={'__blank'}
                                      className={cls.linkAccent}
                                      rel="noopener noreferrer">Designed by Freepik</Link>
                            </small>
                        </CardMedia>
                        <CardTitle title={t('noBlogPostsYetTitle')}/>
                        <CardText>
                            <p>{t('noBlogPostsYet')}</p>
                        </CardText>
                    </Card>
                </div>
            )
        } else {
            return (
                <div className={cls.blogSectionCards}>
                    {blogPosts.ids.map((postId, idx) => {
                        if (idx >= AppComponent.AMOUNT_OF_BLOG_POSTS) {
                            return null;
                        }
                        let post = blogPosts.byId[postId];
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
            link: 'link link--primary',
            linkAccent: 'link link--accent',
            footer: 'footer',
            readMoreLink: 'read-more-link',
        };

        return (
            <main className={cls.main}>
                <ScrollSpy defaultSection={'hero'}
                           onSectionChange={this.handleOnSectionChange}
                           sections={scrollSpySections}/>

                <AppBarComponent show={showAppBar}/>

                <section className={cls.hero} id={'hero'} ref={'hero'}>
                    <IconLogo className={cls.bannerIcon}/>
                    <div className={cls.banner}>
                        <div className={cls.bannerText}><span>{t('bannerText')}</span></div>
                    </div>
                    <div className={cls.bannerLinks}>
                        <Link href={'#about'} label={t('about')} className={cls.link}/>
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
                            reduxLink: `<a href="https://redux.js.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                            class="${cls.link}"">${t('redux')}</a>`,
                        })
                    }}/>
                    <p className={cls.aboutText}>{t('aboutText2')}</p>
                </section>

                <section className={cls.blogSection} id={"blog"}>
                    <Link href={t('blogSectionTitleLink')}
                          target={'_blank'}
                          rel="noopener noreferrer"
                          className={cls.blogSectionTitle}>
                        <span>{t('blogSectionTitle')}</span>
                    </Link>
                    {this.renderBlogSection()}
                    <LinkDOM className={cls.readMoreLink} to={URLS.blogList()}><Button className={'button--md'} label={t('readMore')} flat accent/></LinkDOM>
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
                <FooterComponent/>
            </main>
        )
    }
}

export default translate('translations')(AppComponent);
