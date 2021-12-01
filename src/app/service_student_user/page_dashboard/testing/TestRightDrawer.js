/* eslint-disable react/jsx-props-no-spreading */
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';

const drawerWidth = 140;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(1),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(1),
                },
            }),
        },
    })
);

const TestRightDrawer = function () {
    const drawerOpen = useSelector((state) => state.DashboardReducer.drawerOpen);

    return (
        <Drawer variant="permanent" anchor="right" open={drawerOpen}>
            <Divider />
            <Box sx={{ backgroundColor: 'teal', minHeight: '100vh' }}>Ads</Box>
        </Drawer>
    );
};

export default TestRightDrawer;
