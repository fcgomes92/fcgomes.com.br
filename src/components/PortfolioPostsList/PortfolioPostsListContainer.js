import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import PortfolioPostsListComponent from "./PortfolioPostsListComponent";
import {urlSearchToObject} from "../../utils";
import {getPortfolioPosts} from "../../actions/actions";
import {URLS} from "../../urls";

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

        this.setState({page: parseInt(page, 10)})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.handleLoadPortfolioPosts(this.state.page);
        }
    }

    handleChangePage = async (page) => {
        this.props.history.push(URLS.portfolioListPage(page.selected + 1));
        this.setState({page: page.selected + 1})
    };

    handleLoadPortfolioPosts = async (page) => {
        // undefined is used to trigger the default value of the first parameter
        await this.props.getPortfolioPosts(undefined, page);
        this.setState({page: parseInt(page, 10)})
    };

    render() {
        return <PortfolioPostsListComponent posts={this.props.portfolioPosts}
                                            currentPage={this.state.page}
                                            handleChangePage={this.handleChangePage}
        />
    }
}

export default connect(mapStateToProps, {
    getPortfolioPosts
})(PortfolioPostsListContainer);