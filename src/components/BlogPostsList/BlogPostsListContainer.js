import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import BlogPostsListComponent from "./BlogPostsListComponent";
import {urlSearchToObject} from "../../utils";
import {getBlogPosts} from "../../actions/actions";
import {URLS} from "../../urls";

const mapStateToProps = (state, ownProps) => ({
    blogPosts: state.blogPosts,
});

class BlogPostsListContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        blogPosts: PropTypes.object,
    };

    state = {
        page: 1,
    };

    componentDidMount() {
        let search = urlSearchToObject(this.props.location.search);

        let page = search.page || this.state.page;

        this.handleLoadBlogPosts(page);

        this.setState({page: parseInt(page, 10)})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.handleLoadBlogPosts(this.state.page);
        }
    }

    handleChangePage = async (page) => {
        this.props.history.push(URLS.blogListPage(page.selected + 1));
        this.setState({page: page.selected + 1})
    };

    handleLoadBlogPosts = async (page) => {
        // undefined is used to trigger the default value of the first parameter
        await this.props.getBlogPosts(undefined, page);
        this.setState({page: parseInt(page, 10)})
    };

    render() {
        return <BlogPostsListComponent posts={this.props.blogPosts}
                                       currentPage={this.state.page}
                                       handleChangePage={this.handleChangePage}
        />
    }
}

export default connect(mapStateToProps, {
    getBlogPosts
})(BlogPostsListContainer);