import React from 'react';
import {render} from 'react-dom';

import {I18nextProvider} from 'react-i18next';

import {Provider} from 'react-redux';

import i18n from './i18n';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import 'animate.css';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme';
import RootComponent from "./components/Root/RootComponent";

const store = configureStore();

render(
    <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <RootComponent/>
            </Provider>
        </ThemeProvider>
    </I18nextProvider>,
    document.getElementById('root'),
    () => {
        let splashScreen = document.getElementById("splash-screen");
        if (splashScreen) {
            splashScreen.style.opacity = 0;
            setTimeout(() => {
                document.body.style.overflow = 'auto';
                splashScreen.style.display = 'none';
            }, 250)
        }
    }
);

registerServiceWorker();
