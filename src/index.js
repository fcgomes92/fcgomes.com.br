import React from 'react';
import {render} from 'react-dom';

import {I18nextProvider} from 'react-i18next';

import App from './components/App/AppComponent';
import i18n from './i18n';
import registerServiceWorker from './registerServiceWorker';

render(
    <I18nextProvider i18n={i18n}><App/></I18nextProvider>,
    document.getElementById('root'),
    () => {
        let splashScreen = document.getElementById("splashScreen");
        if (splashScreen) {
            splashScreen.style.opacity = 0;
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 250)
        }
    }
);

registerServiceWorker();
