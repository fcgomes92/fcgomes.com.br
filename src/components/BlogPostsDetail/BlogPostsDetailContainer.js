import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {getBlogPostById} from '../../actions/actions';
import BlogPostsDetailComponent from './BlogPostsDetailComponent';

const mapStateToProps = (state, ownProps) => ({
    blogPosts: state.blogPosts,
});

class BlogPostsDetailContainer extends React.Component {
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

        let post = this.props.blogPosts.byId[postId];

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
        await this.props.getBlogPostById(postId);
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
        let post = this.props.blogPosts.byId[postId];

        return (
            <BlogPostsDetailComponent selectedPostId={postId}
                                      loading={this.props.blogPosts.loading}
                                      selectedPost={post}/>
        )
    }
}

export default connect(mapStateToProps, {
    getBlogPostById
})(BlogPostsDetailContainer);