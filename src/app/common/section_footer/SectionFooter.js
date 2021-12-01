import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Copyright from './Copyright';

const SectionFooter = function () {
    return (
        <Box>
            <Typography variant="h1" color="tomato">
                This is a footer section! It is testing purpose use only!
            </Typography>
            <Copyright />
        </Box>
    );
};

export default SectionFooter;
