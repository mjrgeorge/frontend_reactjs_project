/* eslint-disable react/jsx-no-constructed-context-values */
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import getColorTheme from './themes_color/base';
import getFontTheme from './themes_font/base';

// CREATE CONTEXT FOR COLOR THEME START
export const CustomColorThemeContext = React.createContext({
    currentColorTheme: 'moon',
    setColorTheme: null,
});
// CREATE CONTEXT FOR COLOR THEME END

// CREATE CONTEXT FOR FONT THEME START
export const CustomFontThemeContext = React.createContext({
    currentFontTheme: 'medium',
    setFontTheme: null,
});
// CREATE CONTEXT FOR FONT THEME END

const CustomThemeProvider = function (props) {
    const { children } = props;

    // COLOR THEME ACTIONS START
    const currentColorTheme = localStorage.getItem('appColorTheme') || 'moon';
    const [colorThemeName, setColorThemeName] = React.useState(currentColorTheme);
    const myColorTheme = getColorTheme(colorThemeName);
    const setColorTheme = (name) => {
        localStorage.setItem('appColorTheme', name);
        setColorThemeName(name);
    };
    const colorContextValue = {
        currentColorTheme: colorThemeName,
        setColorTheme,
    };
    // COLOR THEME ACTIONS END

    // FONT THEME ACTIONS START
    const currentFontTheme = localStorage.getItem('appFontTheme') || 'medium';
    const [fontThemeName, setFontThemeName] = React.useState(currentFontTheme);
    const myFontTheme = getFontTheme(fontThemeName);
    const setFontTheme = (name) => {
        localStorage.setItem('appFontTheme', name);
        setFontThemeName(name);
    };
    const fontContextValue = {
        currentFontTheme: fontThemeName,
        setFontTheme,
    };
    // FONT THEME ACTIONS END

    // ALL THEME MERGED HERE
    const theme = createTheme(myFontTheme, myColorTheme);

    React.useEffect(() => {}, [myFontTheme, myColorTheme]);

    return (
        <CustomColorThemeContext.Provider value={colorContextValue}>
            <CustomFontThemeContext.Provider value={fontContextValue}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CustomFontThemeContext.Provider>
        </CustomColorThemeContext.Provider>
    );
};

export default CustomThemeProvider;
