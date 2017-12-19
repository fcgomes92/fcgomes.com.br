import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({});

class BlogPostsListContainer extends React.Component {
    static propTypes = {};

    render() {
        const cls = {
            main: 'animated fadeIn',
        };
        return <main className={cls.main}>
            Blog Posts List
        </main>
    }
}

export default connect(mapStateToProps, {})(BlogPostsListContainer);