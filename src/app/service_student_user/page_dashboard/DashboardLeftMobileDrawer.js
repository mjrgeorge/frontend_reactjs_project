import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import HomeIcon from '@mui/icons-material/Home';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drawerCloseAction } from '../../../redux/service_student_user/action/DashboardAction';

const DashboardLeftMobileDrawer = function () {
    const dispatch = useDispatch();
    const mobileDrawerOpen = useSelector((state) => state.DashboardReducer.mobileDrawerOpen);

    const handleClose = () => {
        dispatch(drawerCloseAction(false));
    };

    return (
        <Drawer open={mobileDrawerOpen} onClose={handleClose}>
            <Toolbar />
            <List>
                {['Dashboard'].map((text, index) => (
                    <ListItem button key={text} onClick={handleClose}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <HomeIcon /> : <CastForEducationIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
export default DashboardLeftMobileDrawer;
