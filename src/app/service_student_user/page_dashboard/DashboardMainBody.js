import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import LockIcon from '@mui/icons-material/Lock';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    adsDrawerOpenAction,
    drawerOpenAction
} from '../../../redux/service_student_user/action/DashboardAction';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.h2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.grey[300],
    height: '208px',
}));

const services = [
    {
        id: 1,
        service: 'Study Content',
        isPurchased: true,
    },
    {
        id: 2,
        service: 'Home Tutor',
        isPurchased: false,
    },
    {
        id: 3,
        service: 'Study Plan',
        isPurchased: false,
    },
    {
        id: 4,
        service: 'Training',
        isPurchased: false,
    },
    {
        id: 5,
        service: 'Exam Plan',
        isPurchased: false,
    },
    {
        id: 6,
        service: 'Event',
        isPurchased: false,
    },
    {
        id: 7,
        service: 'Schooling',
        isPurchased: false,
    },
    {
        id: 8,
        service: 'Coming Soon',
        isPurchased: false,
    },
];

const DashboardMainBody = function ({ matches }) {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state) => state.DashboardReducer.drawerOpen);
    const adsDrawerOpen = useSelector((state) => state.DashboardReducer.adsDrawerOpen);

    const handleSidebarDrawerOpen = () => {
        dispatch(drawerOpenAction(!drawerOpen));
    };
    const handleAdsDrawerOpen = () => {
        dispatch(adsDrawerOpenAction(!adsDrawerOpen));
    };
    return (
        <Grid container direction="column">
            {matches && (
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <IconButton
                            onClick={handleSidebarDrawerOpen}
                            sx={{
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                                marginLeft: '-36px',
                            }}
                        >
                            {drawerOpen ? (
                                <ArrowCircleLeftRoundedIcon color="primary" />
                            ) : (
                                <ArrowCircleRightRoundedIcon color="primary" />
                            )}
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            onClick={handleAdsDrawerOpen}
                            sx={{
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                                marginRight: '-36px',
                            }}
                        >
                            {adsDrawerOpen ? (
                                <ArrowCircleRightRoundedIcon color="primary" />
                            ) : (
                                <ArrowCircleLeftRoundedIcon color="primary" />
                            )}
                        </IconButton>
                    </Grid>
                </Grid>
            )}
            <Grid item>
                <Typography
                    variant="h2"
                    color="GrayText"
                    gutterBottom
                    sx={{ pt: { xs: 3, md: 0 }, fontWeight: '600' }}
                >
                    Dashboard
                </Typography>
            </Grid>
            <Grid item container spacing={2}>
                {services.map((item) => (
                    <Grid item xs={6} lg={3} key={item.id}>
                        <Item>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 200,
                                }}
                            >
                                <Typography variant="h3" color="GrayText" gutterBottom>
                                    {item.service}
                                </Typography>
                            </Box>
                            {!item.isPurchased && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end',
                                        height: 0,
                                    }}
                                >
                                    <IconButton>
                                        <LockIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default DashboardMainBody;
