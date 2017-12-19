import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({});

class BlogPostsDetailContainer extends React.Component {
    static propTypes = {};

    render() {
        const cls = {
            main: 'animated fadeIn',
        };
        return <main className={cls.main}>
            Blog Posts Detail
        </main>
    }
}

export default connect(mapStateToProps, {})(BlogPostsDetailContainer);