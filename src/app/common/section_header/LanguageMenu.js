import { MenuItem, Select } from '@mui/material';
import i18next from 'i18next';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLocalInfo } from '../../../redux/service_student_user/actions/DemoActions';

const languages = [
    {
        code: 'en',
        name: 'ENGLISH',
    },
    {
        code: 'bn',
        name: 'বাংলা',
    },
    {
        code: 'hi',
        name: 'हिंदी',
    },
];

const LanguageMenu = function () {
    const [newLanguageCode, setNewLanguageCode] = React.useState('');
    const [currentCode, setCurrentCode] = React.useState('');

    const dispatch = useDispatch();
    const userLocalInformation = useSelector((state) => state.DemoReducers.userLocalInformation);
    const { countryCode } = userLocalInformation;

    const handleLanguageChange = (event) => {
        localStorage.setItem('lang', event.target.value);
        setCurrentCode(event.target.value);
        i18next.changeLanguage(event.target.value);
    };

    React.useEffect(() => {
        dispatch(getUserLocalInfo());
        if (countryCode === 'BD') {
            setNewLanguageCode('bn');
        } else if (countryCode === 'IN') {
            setNewLanguageCode('hi');
        } else {
            setNewLanguageCode('en');
        }
        const x = localStorage.getItem('lang') || newLanguageCode;
        setCurrentCode(x);
        i18next.changeLanguage(x);
    }, [countryCode, dispatch, newLanguageCode]);

    return (
        <Select value={currentCode} onChange={handleLanguageChange} autoWidth disableUnderline>
            {languages.map(({ code, name }) => (
                <MenuItem key={code} value={code}>
                    {name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default LanguageMenu;
