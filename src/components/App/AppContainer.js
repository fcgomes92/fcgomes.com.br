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
        history: PropTypes.object,
        location: PropTypes.object,
        getBlogPosts: PropTypes.func,
        getPortfolioPosts: PropTypes.func
    };

    handleLoadPortfolioPosts = async (amount) => {
        return await this.props.getPortfolioPosts(amount);
    };

    handleLoadBlogPosts = async (amount) => {
        return await this.props.getBlogPosts(amount);
    };

    render() {
        const {blogPosts, portfolioPosts, history, location} = this.props;
        return <AppComponent blogPosts={blogPosts}
                             history={history}
                             location={location}
                             portfolioPosts={portfolioPosts}
                             loadBlogPosts={this.handleLoadBlogPosts}
                             loadPortfolioPosts={this.handleLoadPortfolioPosts}/>
    }
}

export default connect(mapStateToProps, {
    getBlogPosts,
    getPortfolioPosts,
})(AppContainer);