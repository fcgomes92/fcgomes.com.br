import React from 'react';
import PropTypes from 'prop-types';

import classNames from "classnames";

import {translate} from 'react-i18next';

import Button from 'react-toolbox/lib/button/Button';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';

import {Link} from 'react-router-dom';

import AppBarComponent from '../AppBar/AppBarComponent';
import '../../assets/styles/components/PortfolioPostsList.css';
import {URLS} from "../../urls";

class PortfolioPostsListComponent extends React.Component {
    static propTypes = {
        t: PropTypes.func,
        i18n: PropTypes.object,
        posts: PropTypes.object,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {posts, currentPage, t} = this.props;
        const cls = {
            main: 'animated fadeIn main--showing-nav-bar',
            portfolioCards: 'portfolio-posts-list__cards',
            portfolioCard: 'portfolio-posts-list__card',
            portfolioCardImage: 'portfolio-posts-list__card__image',
            portfolioCardExcerpt: 'portfolio-posts-list__card__excerpt',
            portfolioLoading: 'portfolio-posts-list__loading',
            paginationContainer: 'pagination-container',
        };
        return <main className={cls.main}>
            <AppBarComponent/>
            <section className={cls.portfolioCards}>
                {posts.ids.map(ppId => {
                    let post = posts.byId[ppId];
                    return (
                        <Card key={`__portfolio_post_card__${post.id}`}
                              className={classNames(cls.portfolioCard, {
                                  [`portfolio-posts-list__cards__card--delay-animation-0s`]: true,
                              })}>
                            <CardTitle title={post.title}/>
                            <CardMedia image={post.featured_image}
                                       aspectRatio="square"
                                       className={cls.portfolioCardImage}/>
                            <CardText className={cls.portfolioCardExcerpt}>
                                <p dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
                            </CardText>
                            <CardActions>
                                <Link to={URLS.portfolioDetail(ppId)}>
                                    <Button label={t('readMore')} flat primary/>
                                </Link>
                            </CardActions>
                        </Card>
                    )
                })}
            </section>
            {/* TODO: really create a pagination component (not just show in a white bg )*/}
            <div className={cls.paginationContainer}>
                {currentPage}/{posts.totalPagesAvailable}
            </div>
        </main>
    }
}

export default translate('translations')(PortfolioPostsListComponent);