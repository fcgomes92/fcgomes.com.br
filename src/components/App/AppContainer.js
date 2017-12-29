import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import AppComponent from './AppComponent';

import {getBlogPosts} from '../../actions/actions';

const mapStateToProps = (state, ownProps) => ({
    blogPosts: state.blogPosts,
});

class AppContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        getBlogPosts: PropTypes.func,
    };

    handleLoadBlogPosts = async (amount) => {
        return await this.props.getBlogPosts(amount);
    };

    render() {
        const {blogPosts, history, location} = this.props;
        return <AppComponent blogPosts={blogPosts}
                             history={history}
                             location={location}
                             loadBlogPosts={this.handleLoadBlogPosts}/>
    }
}

export default connect(mapStateToProps, {
    getBlogPosts,
})(AppContainer);