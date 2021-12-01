import { MenuItem, Select } from '@mui/material';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomFontThemeContext } from '../../../config/common/themes/CustomThemeProvider';

const Font = function () {
    const { t } = useTranslation();

    const { currentFontTheme, setFontTheme } = useContext(CustomFontThemeContext);

    const handleFontThemeChange = (event) => {
        setFontTheme(event.target.value);
    };

    return (
        <Select
            variant="standard"
            value={currentFontTheme}
            onChange={handleFontThemeChange}
            autoWidth
            disableUnderline
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
            <MenuItem dense value="small">
                {t('Small')}
            </MenuItem>
            <MenuItem dense value="medium">
                {t('Medium')}
            </MenuItem>
            <MenuItem dense value="large">
                {t('Large')}
            </MenuItem>
        </Select>
    );
};

export default Font;
