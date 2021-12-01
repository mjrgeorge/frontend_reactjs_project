import dark from './dark';
import light from './light';
import moon from './moon';

const themes = {
    light,
    dark,
    moon,
};

export default function getColorTheme(theme) {
    return themes[theme];
}
