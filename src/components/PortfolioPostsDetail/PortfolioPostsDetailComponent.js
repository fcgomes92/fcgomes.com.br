import React from 'react';
import PropTypes from 'prop-types';

import {withRouter, Link as LinkDOM} from 'react-router-dom';

import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import Button from 'react-toolbox/lib/button/Button';

import {translate} from 'react-i18next';

import AppBarComponent from '../AppBar/AppBarComponent';
import '../../assets/styles/components/PortfolioPostsDetail.css';
import LoaderComponent from "../Loader/LoaderComponent";
import {URLS} from "../../urls";

class PortfolioPostsDetailComponent extends React.Component {
    static propTypes = {
        loading: PropTypes.bool,
        selectedPost: PropTypes.object,
        selectedPostId: PropTypes.number,
        history: PropTypes.object,
    };

    componentDidMount() {
        this.handleHighlightCode();
    }

    componentDidUpdate(prevProps, prevState) {
        this.handleHighlightCode();
    }

    handleHighlightCode = async () => {
        Array.from(document.querySelectorAll('pre code')).map(function (block) {
            //eslint-disable-next-line
            return hljs.highlightBlock(block);
        });
    };

    renderLoading() {
        const {t} = this.props;
        const cls = {
            loaderContainer: 'loader-container',
            loadingText: 'text--lg text--primary',
        };

        return (
            <div className={cls.loaderContainer}>
                <LoaderComponent accent/>
                <div className={cls.loadingText}>{t('loading')}</div>
            </div>
        )
    }

    renderCard() {
        const {selectedPost, t} = this.props;

        const cls = {
            portfolioContent: 'portfolio-posts-detail__content',
            portfolioCard: 'portfolio-posts-detail__card',
            portfolioCardImage: 'portfolio-posts-detail__card__image',
            portfolioCardTitle: 'portfolio-posts-detail__card__title',
            portfolioCardAuthorTitle: 'portfolio-posts-detail__card__title portfolio-posts-detail__card__title--author',
            portfolioCardContent: 'portfolio-posts-detail__card__content',
            readMorePosts: 'portfolio-posts-detail__card__content__read-more',
        };

        return (
            <section>
                <Card key={`__portfolio_post_card__${selectedPost.id}`}
                      className={cls.portfolioCard}>
                    <CardMedia image={selectedPost.featured_image}
                               aspectRatio="square"
                               contentOverlay
                               className={cls.portfolioCardImage}>
                        <CardTitle title={selectedPost.title}
                                   className={cls.portfolioCardTitle}/>
                    </CardMedia>
                    <CardText className={cls.portfolioCardContent}>
                        <div dangerouslySetInnerHTML={{__html: selectedPost.content}}/>
                        <CardTitle title={selectedPost.author.name}
                                   className={cls.portfolioCardAuthorTitle}
                                   avatar={selectedPost.author.largeAvatar}/>
                        <div className={cls.readMorePosts}>
                            <LinkDOM to={URLS.portfolioList()}>
                                <Button primary label={t('morePortfolioPosts')}/>
                            </LinkDOM>
                        </div>
                    </CardText>
                </Card>
            </section>
        )
    }

    renderContent() {
        const {loading} = this.props;

        if (loading) {
            return this.renderLoading();
        } else {
            return this.renderCard();
        }
    }

    render() {
        const {selectedPost} = this.props;

        const cls = {
            main: 'animated fadeInDown main--showing-nav-bar',
        };

        if (!selectedPost) {
            return null;
        }

        return <main className={cls.main}>
            <AppBarComponent/>
            {this.renderContent()}
        </main>
    }
}

export default withRouter(translate('translations')(PortfolioPostsDetailComponent));