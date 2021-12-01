import small from './small';
import medium from './medium';
import large from './large';

const themes = {
    small,
    medium,
    large,
};

export default function getFontTheme(theme) {
    return themes[theme];
}
