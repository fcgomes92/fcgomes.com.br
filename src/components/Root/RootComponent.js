import React from 'react';

import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import {DEBUG, GOOGLE_TRACKING_ID} from '../../settings/settings';
import {ROUTES} from '../../urls';
import GoogleAnalyticsComponent from "../GoogleAnalytics/GoogleAnalyticsComponent";

const customHistory = createBrowserHistory();

class RootComponent extends React.Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <GoogleAnalyticsComponent trackingId={GOOGLE_TRACKING_ID} debug={DEBUG} history={customHistory}/>
                    <Switch>
                        {
                            Object.keys(ROUTES).map(routeKey => {
                                let route = ROUTES[routeKey];
                                return (
                                    <Route
                                        exact={route.exact}
                                        path={route.path}
                                        component={route.component}
                                        key={`__key_${route.name}`}
                                    />
                                )
                            })
                        }
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RootComponent;