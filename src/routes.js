/**
 * Created by gomes on 16/10/16.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './containers/App';
// import {UserAuthWrapper} from 'redux-auth-wrapper';
// import {replace} from 'react-router-redux';

// const UserIsAuthenticated = UserAuthWrapper({
//     authSelector: state => state.auth.user,
//     redirectAction: (newLoc) => (dispatch) => {
//         dispatch(replace(newLoc));
//         dispatch({
//             type: DISPLAY_FEEDBACK_MESSAGE,
//             payload: {
//                 message: `You must be logged in!`,
//                 type: FEEDBACK_INFO
//             }
//         });
//     },
//     wrapperDisplayName: 'UserIsAuthenticated'
// });
// const Authenticated = UserIsAuthenticated((props) => props.children);

const routes = (
    <Route path="/" component={App}>
    </Route>
);

export default routes;
