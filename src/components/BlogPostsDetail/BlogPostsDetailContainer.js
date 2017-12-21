import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({});

class BlogPostsDetailContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
    };

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