import { MenuItem, Select } from '@mui/material';
import React, { useContext } from 'react';
import { CustomColorThemeContext } from '../../../config/common/themes/CustomThemeProvider';

const Color = function () {
    const { currentColorTheme, setColorTheme } = useContext(CustomColorThemeContext);

    const handleColorThemeChange = (event) => {
        setColorTheme(event.target.value);
    };

    return (
        <Select
            variant="standard"
            value={currentColorTheme}
            onChange={handleColorThemeChange}
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
            <MenuItem dense value="light">
                Light
            </MenuItem>
            <MenuItem dense value="dark">
                Dark
            </MenuItem>
            <MenuItem dense value="moon">
                Moon
            </MenuItem>
        </Select>
    );
};

export default Color;
