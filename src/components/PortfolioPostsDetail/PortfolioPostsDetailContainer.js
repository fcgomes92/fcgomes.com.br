import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {getPortfolioPostById} from '../../actions/actions';
import AppBarComponent from '../AppBar/AppBarComponent';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import '../../assets/styles/components/PortfolioPostsDetail.css';

const mapStateToProps = (state, ownProps) => ({
    portfolioPosts: state.portfolioPosts,
});

class PortfolioPostsDetailContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object,
    };

    state = {
        postId: null,
    };

    componentDidMount() {
        const {postId} = this.props.match.params;

        let post = this.props.portfolioPosts.byId[postId];

        if (!post) {
            this.handleLoadPost(postId);
        } else {
            this.handleHighlightCode();
        }

        this.setState({postId});
    }

    componentDidUpdate(prevProps, prevState) {
        this.handleHighlightCode();
    }

    handleLoadPost = async (postId) => {
        await this.props.getPortfolioPostById(postId);
        await this.handleHighlightCode();
    };

    handleHighlightCode = async () => {
        Array.from(document.querySelectorAll('pre code')).map(function (block) {
            //eslint-disable-next-line
            return hljs.highlightBlock(block);
        });
    };

    // TODO: create a dummy component
    render() {
        const {postId} = this.state;
        let post = this.props.portfolioPosts.byId[postId];

        const cls = {
            main: 'animated fadeInDown main--showing-nav-bar',
            portfolioContent: 'portfolio-posts-detail__content',
            portfolioCard: 'portfolio-posts-detail__card',
            portfolioCardImage: 'portfolio-posts-detail__card__image',
            portfolioCardTitle: 'portfolio-posts-detail__card__title',
            portfolioCardAuthorTitle: 'portfolio-posts-detail__card__title portfolio-posts-detail__card__title--author',
            portfolioCardContent: 'portfolio-posts-detail__card__content',
            portfolioLoading: 'portfolio-posts-detail__loading',
            paginationContainer: 'pagination-container',
        };

        if (!post) {
            return null;
        }

        return <main className={cls.main}>
            <AppBarComponent/>
            <section>
                <Card key={`__portfolio_post_card__${post.id}`}
                      className={cls.portfolioCard}>
                    <CardMedia image={post.featured_image}
                               aspectRatio="square"
                               contentOverlay
                               className={cls.portfolioCardImage}>
                        <CardTitle title={post.title}
                                   className={cls.portfolioCardTitle}/>
                    </CardMedia>
                    <CardText className={cls.portfolioCardContent}>
                        <div dangerouslySetInnerHTML={{__html: post.content}}/>
                        <CardTitle title={post.author.name}
                                   className={cls.portfolioCardAuthorTitle}
                                   avatar={post.author.largeAvatar}/>
                    </CardText>
                </Card>
            </section>
        </main>
    }
}

export default connect(mapStateToProps, {
    getPortfolioPostById
})(PortfolioPostsDetailContainer);