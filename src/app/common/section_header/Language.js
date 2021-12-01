import { MenuItem, Select } from '@mui/material';
import i18next from 'i18next';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLocalInfo } from '../../../redux/common/action/HeaderAction';

const languages = [
    {
        code: 'en',
        name: 'English',
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

const Language = function () {
    const [newLanguageCode, setNewLanguageCode] = React.useState('');
    const [currentCode, setCurrentCode] = React.useState('');

    // USER LOCAL INFORMATION ACTION
    const dispatch = useDispatch();
    const userLocalInformation = useSelector((state) => state.HeaderReducer.userLocalInformation);
    const { countryCode } = userLocalInformation;

    // MULTI LANGUAGE CHANGE FUNCTION
    const handleLanguageChange = (event) => {
        localStorage.setItem('lang', event.target.value);
        setCurrentCode(event.target.value);
        i18next.changeLanguage(event.target.value);
    };

    // COUNTRY WISE CONDITIONALLY LANGUAGE SET
    React.useEffect(() => {
        dispatch(getUserLocalInfo());
        if (countryCode === 'BD') {
            setNewLanguageCode('bn');
        } else if (countryCode === 'IN') {
            setNewLanguageCode('hi');
        } else {
            setNewLanguageCode('en');
        }
        const currentLanguageCode = localStorage.getItem('lang') || newLanguageCode;
        setCurrentCode(currentLanguageCode);
        i18next.changeLanguage(currentLanguageCode);
    }, [countryCode, dispatch, newLanguageCode]);

    return (
        <Select
            variant="standard"
            value={currentCode}
            onChange={handleLanguageChange}
            disableUnderline
            autoWidth
            sx={{
                color: 'inherit',
                fontSize: '14px',
                '& .MuiSelect-icon': {
                    color: 'inherit',
                    right: '8px',
                    fontSize: '20px',
                },
            }}
        >
            {languages.map(({ code, name }) => (
                <MenuItem dense key={code} value={code}>
                    {name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default Language;
