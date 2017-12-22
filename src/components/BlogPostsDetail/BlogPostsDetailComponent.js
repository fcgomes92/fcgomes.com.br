import React from 'react';
import PropTypes from 'prop-types';

import LazyLoad from 'react-lazyload';

import {withRouter, Link as LinkDOM} from 'react-router-dom';

import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import Button from 'react-toolbox/lib/button/Button';

import {translate} from 'react-i18next';

import AppBarComponent from '../AppBar/AppBarComponent';
import '../../assets/styles/components/BlogPostsDetail.css';
import LoaderComponent from "../Loader/LoaderComponent";
import {URLS} from "../../urls";

class BlogPostsDetailComponent extends React.Component {
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
            blogContent: 'blog-posts-detail__content',
            blogCard: 'blog-posts-detail__card',
            blogCardImage: 'blog-posts-detail__card__image',
            blogCardTitle: 'blog-posts-detail__card__title',
            blogCardAuthorTitle: 'blog-posts-detail__card__title blog-posts-detail__card__title--author',
            blogCardContent: 'blog-posts-detail__card__content',
            readMorePosts: 'blog-posts-detail__card__content__read-more',
        };

        return (
            <section>
                <Card key={`__blog_post_card__${selectedPost.id}`}
                      className={cls.blogCard}>
                    <CardMedia image={selectedPost.featured_image}
                               aspectRatio="square"
                               contentOverlay
                               className={cls.blogCardImage}>
                        <CardTitle title={selectedPost.title}
                                   className={cls.blogCardTitle}/>
                    </CardMedia>
                    <CardText className={cls.blogCardContent}>
                        <div dangerouslySetInnerHTML={{__html: selectedPost.content}}/>
                        <CardTitle title={selectedPost.author.name}
                                   className={cls.blogCardAuthorTitle}
                                   avatar={selectedPost.author.largeAvatar}/>
                        <div className={cls.readMorePosts}>
                            <LinkDOM to={URLS.blogList()}>
                                <Button primary label={t('moreBlogPosts')}/>
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
            <LazyLoad once height={'100%'}>
                {this.renderContent()}
            </LazyLoad>
        </main>
    }
}

export default withRouter(
    translate('translations')(BlogPostsDetailComponent)
);