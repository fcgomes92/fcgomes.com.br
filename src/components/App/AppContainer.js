import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import AppComponent from './AppComponent';

import {getBlogPosts, getPortfolioPosts} from '../../actions/actions';

const mapStateToProps = (state, ownProps) => ({
    blogPosts: state.blogPosts,
    portfolioPosts: state.portfolioPosts,
});

class AppContainer extends React.Component {
    static propTypes = {
        getBlogPosts: PropTypes.func,
        getPortfolioPosts: PropTypes.func
    };

    handleLoadPortfolioPosts = async (amount = null) => {
        return await this.props.getBlogPosts(amount);
    };

    handleLoadBlogPosts = async (amount = null) => {
        return await this.props.getPortfolioPosts(amount);
    };

    render() {
        const {blogPosts, portfolioPosts} = this.props;
        return <AppComponent blogPosts={blogPosts}
                             portfolioPosts={portfolioPosts}
                             loadBlogPosts={this.handleLoadBlogPosts}
                             loadPortfolioPosts={this.handleLoadPortfolioPosts}/>
    }
}

export default connect(mapStateToProps, {
    getBlogPosts,
    getPortfolioPosts,
})(AppContainer);