import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {getPortfolioPostById} from '../../actions/actions';
import PortfolioPostsDetailComponent from './PortfolioPostsDetailComponent';

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

        this.setState({postId: parseInt(postId, 10)});
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

    render() {
        const {postId} = this.state;
        let post = this.props.portfolioPosts.byId[postId];

        return (
            <PortfolioPostsDetailComponent selectedPostId={postId}
                                           loading={this.props.portfolioPosts.loading}
                                           selectedPost={post}/>
        )
    }
}

export default connect(mapStateToProps, {
    getPortfolioPostById
})(PortfolioPostsDetailContainer);