/* eslint-disable no-unused-expressions */
import { CssBaseline, Typography } from '@mui/material';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import i18n from 'i18next';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './app/App';
import languageBn from './assets/common/locales/bn/translation.json';
import languageEn from './assets/common/locales/en/translation.json';
import languageHi from './assets/common/locales/hi/translation.json';
import Store from './redux/Store';

// Redux
const store = Store();

// Language setup
i18n.use(initReactI18next).init({
    supportedLngs: ['en', 'bn', 'hi'],
    resources: {
        en: {
            translation: languageEn,
        },
        bn: {
            translation: languageBn,
        },
        hi: {
            translation: languageHi,
        },
    },
    fallbackLng: 'en',
});

const loadingMarkup = (
    <Typography variant="h4" color="secondary" align="center" gutterBottom>
        {' '}
        Loading. . .
    </Typography>
);

// Logger setup
process.env.NODE_ENV === 'production' &&
    Sentry.init({
        dsn: 'https://48ce51fe41564ab99662a8561d1e2189@o1064152.ingest.sentry.io/6065852',
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
    });

ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <CssBaseline />
            <Provider store={store}>
                <App />
            </Provider>
            ,
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);
