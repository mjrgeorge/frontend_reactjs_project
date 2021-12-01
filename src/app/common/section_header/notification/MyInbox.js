import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { ListItemButton, ListItemIcon } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

const MyInbox = function ({ handleNotificationMenuClose }) {
    const items = [1, 2, 3];
    return (
        <Box>
            {items.map((item) => (
                <List dense key={item}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleNotificationMenuClose}>
                            <ListItemIcon>
                                <RadioButtonCheckedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="There are many variations."
                                secondary="Lorem Ipsum available, but the..."
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            ))}
        </Box>
    );
};
export default MyInbox;
