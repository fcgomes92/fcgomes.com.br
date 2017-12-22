import React from 'react';
import PropTypes from 'prop-types';

import classNames from "classnames";

import LazyLoad from 'react-lazyload';

import {translate} from 'react-i18next';

import ReactPaginate from 'react-paginate';

import Button from 'react-toolbox/lib/button/Button';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';

import {Link} from 'react-router-dom';

import AppBarComponent from '../AppBar/AppBarComponent';
import '../../assets/styles/components/BlogPostsList.css';
import {URLS} from "../../urls";
import LoaderComponent from "../Loader/LoaderComponent";

class BlogPostsListComponent extends React.Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
        posts: PropTypes.object,
        currentPage: PropTypes.number,
        handleChangePage: PropTypes.func,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

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

    renderCards() {
        const {posts, t} = this.props;

        const cls = {
            blogCards: 'blog-posts-list__cards',
            blogCard: 'blog-posts-list__card',
            blogCardImage: 'blog-posts-list__card__image',
            blogCardExcerpt: 'blog-posts-list__card__excerpt',
            blogLoading: 'blog-posts-list__loading',
        };

        return (
            <section className={cls.blogCards}>
                {posts.ids.map(ppId => {
                    let post = posts.byId[ppId];
                    return (
                        <Card key={`__blog_post_card__${post.id}`}
                              className={classNames(cls.blogCard, {
                                  [`blog-posts-list__cards__card--delay-animation-0s`]: true,
                              })}>
                            <CardTitle title={post.title}/>
                            <CardMedia image={post.featured_image}
                                       aspectRatio="square"
                                       className={cls.blogCardImage}/>
                            <CardText className={cls.blogCardExcerpt}>
                                <p dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
                            </CardText>
                            <CardActions>
                                <Link to={URLS.blogDetail(ppId)}>
                                    <Button label={t('readMore')} flat primary/>
                                </Link>
                            </CardActions>
                        </Card>
                    )
                })}
            </section>
        )
    }

    renderContent() {
        const {posts} = this.props;

        if (posts.loading) {
            return this.renderLoading();
        } else {
            return this.renderCards();
        }
    }

    render() {
        const {posts, currentPage} = this.props;
        const cls = {
            main: 'animated fadeIn main--showing-nav-bar',
            nextLabel: 'material-icons pagination__container__nav',
            previousLabel: 'material-icons pagination__container__nav',
            pagination: 'pagination',
            paginationContainer: 'pagination__container',
            pageClassName: 'pagination__container__page',
            activeClassName: 'pagination-container__page pagination__container__page--active',
        };

        return <main className={cls.main}>
            <AppBarComponent/>
            <LazyLoad once height={'100%'}>
                {this.renderContent()}
                <div className={cls.pagination}>
                    <ReactPaginate containerClassName={cls.paginationContainer}
                                   pageCount={posts.totalPagesAvailable}
                                   nextClassName={cls.nextLabel}
                                   nextLabel={'navigate_next'}
                                   previousClassName={cls.previousLabel}
                                   previousLabel={'navigate_before'}
                                   pageRangeDisplayed={5}
                                   marginPagesDisplayed={1}
                                   onPageChange={this.props.handleChangePage}
                                   pageClassName={cls.pageClassName}
                                   activeClassName={cls.activeClassName}
                                   forcePage={currentPage - 1}/>
                </div>
            </LazyLoad>
        </main>
    }
}

export default translate('translations')(BlogPostsListComponent);