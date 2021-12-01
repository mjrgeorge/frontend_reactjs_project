/* eslint-disable no-unused-expressions */
import { CssBaseline, Typography } from '@mui/material';
import i18n from 'i18next';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import languageBn from './config/common/locales/bn/translation.json';
import languageEn from './config/common/locales/en/translation.json';
import languageHi from './config/common/locales/hi/translation.json';
import CustomThemeProvider from './config/common/themes/CustomThemeProvider';
import Store from './redux/Store';

// REDUX STORE INTEGRATION
const store = Store();

// MULTI LANGUAGE SETUP START
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
// MULTI LANGUAGE SETUP END

ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <BrowserRouter>
                <CustomThemeProvider>
                    <CssBaseline />
                    <Provider store={store}>
                        <App />
                    </Provider>
                </CustomThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);
