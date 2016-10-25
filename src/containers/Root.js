/**
 * Created by gomes on 16/10/16.
 */
import React, {PropTypes} from 'react';
import {Router} from 'react-router'
import {Provider} from 'react-redux';
import routes from '../routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../settings';

const Root = ({store, history}) => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={theme}>
            <Router history={history} routes={routes}/>
        </MuiThemeProvider>
    </Provider>
);


Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;