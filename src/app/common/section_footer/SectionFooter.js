import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Copyright from './Copyright';

const SectionFooter = function () {
    return (
        <Box>
            <Typography paragraph align="center">
                Footer section!
            </Typography>
            <Copyright />
        </Box>
    );
};

export default SectionFooter;
