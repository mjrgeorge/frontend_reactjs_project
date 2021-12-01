import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

const Profile = function ({ setAnchorEl, menuId }) {
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <IconButton
            size="small"
            aria-controls={menuId}
            onClick={handleProfileMenuOpen}
            color="inherit"
        >
            <AccountCircle />
            <ArrowDropDownIcon
                sx={{
                    fontSize: '20px',
                }}
            />
        </IconButton>
    );
};

export default Profile;
