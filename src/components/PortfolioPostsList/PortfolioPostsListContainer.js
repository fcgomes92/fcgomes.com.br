import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import PortfolioPostsListComponent from "./PortfolioPostsListComponent";
import {urlSearchToObject} from "../../utils";
import {getPortfolioPosts} from "../../actions/actions";

const mapStateToProps = (state, ownProps) => ({
    portfolioPosts: state.portfolioPosts,
});

class PortfolioPostsListContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        portfolioPosts: PropTypes.object,
    };

    state = {
        page: 1,
    };

    componentDidMount() {
        let search = urlSearchToObject(this.props.location.search);

        let page = search.page || this.state.page;

        this.handleLoadPortfolioPosts(page);

        this.setState({page})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.handleLoadPortfolioPosts(this.state.page);
        }
    }

    handleLoadPortfolioPosts = async (page) => {
        // undefined is used to trigger the default value of the first parameter
        await this.props.getPortfolioPosts(undefined, page);
        await this.setState({page});
    };

    render() {
        return <PortfolioPostsListComponent posts={this.props.portfolioPosts}
                                            currentPage={this.state.page}
                                            loadPage
        />
    }
}

export default connect(mapStateToProps, {
    getPortfolioPosts
})(PortfolioPostsListContainer);