import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

const Notification = function ({ setNotificationAnchorEl, notificationMenuId }) {
    const handleProfileClick = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };

    return (
        <IconButton
            size="small"
            color="inherit"
            aria-controls={notificationMenuId}
            onClick={handleProfileClick}
        >
            <Badge badgeContent={5} color="error">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};

export default Notification;
