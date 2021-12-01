/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import SectionFooter from '../../../common/section_footer/SectionFooter';
import SectionHeader from '../../../common/section_header/SectionHeader';
import TestLeftDrawer from './TestLeftDrawer';
import TestRightDrawer from './TestRightDrawer';

const DashboardLayout = function ({ children }) {
    return (
        <>
            <SectionHeader />
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <TestLeftDrawer />
                </Box>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Container sx={{ backgroundColor: 'lightgray' }}>{children}</Container>
                </Box>
                <Box>
                    <TestRightDrawer />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'red' }}>
                <SectionFooter />
            </Box>
        </>
    );
};

export default DashboardLayout;
