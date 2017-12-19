import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({});

class PortfolioPostsDetailContainer extends React.Component {
    static propTypes = {};

    render() {
        const cls = {
            main: 'animated fadeIn',
        };
        return <main className={cls.main}>
            Portfolio Posts Detail
        </main>
    }
}

export default connect(mapStateToProps, {})(PortfolioPostsDetailContainer);