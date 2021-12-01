import { Stack, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';

const drawerWidth = 160;

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

const Advertisement = function () {
    const adsDrawerOpen = useSelector((state) => state.DashboardReducer.adsDrawerOpen);

    return (
        <Drawer variant="permanent" anchor="right" open={adsDrawerOpen}>
            {adsDrawerOpen && (
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: '100vh' }}
                >
                    <Typography variant="h2" color="GrayText">
                        Ads
                    </Typography>
                </Stack>
            )}
        </Drawer>
    );
};

export default Advertisement;
