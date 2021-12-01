// import Advertisement from './Advertisement';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import Advertisement from '../../common/Advertisement/Advertisement';
import DashboardLeftDrawer from './DashboardLeftDrawer';
import DashboardLeftDrawerMobile from './DashboardLeftMobileDrawer';
import DashboardMainBody from './DashboardMainBody';

const PageDashboard = function () {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{ display: 'flex' }}>
            <Box>{matches ? <DashboardLeftDrawer /> : <DashboardLeftDrawerMobile />}</Box>
            <Box sx={{ pl: 2, pr: 2, width: '100%' }}>
                <DashboardMainBody matches={matches} />
            </Box>
            <Box>
                <Box>{matches && <Advertisement />}</Box>
            </Box>
        </Box>
    );
};

export default PageDashboard;
