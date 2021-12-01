import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaletteIcon from '@mui/icons-material/Palette';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TranslateIcon from '@mui/icons-material/Translate';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    drawerOpenAction,
    mobileDrawerOpenAction
} from '../../../redux/service_student_user/action/DashboardAction';
import Color from './Color';
import Font from './Font';
import Language from './Language';
import Notification from './notification/Notification';
import NotificationTab from './notification/NotificationTab';
import Profile from './Profile';
import Search from './Search';

// THEME FOR HEADER SECTION START
const innerTheme = createTheme({
    typography: {
        fontFamily: ['"Open Sans"'].join(','),
        button: {
            fontSize: 14,
            textTransform: 'capitalize',
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    paddingLeft: '8px',
                    paddingRight: 0,
                    '&.MuiToolbar-root': {
                        paddingLeft: '8px',
                        paddingRight: 0,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '2px 5px',
                },
            },
        },
    },
});
// THEME FOR HEADER SECTION END

const SectionHeader = function () {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const notificationOpen = Boolean(notificationAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationMenuOpen = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };
    const handleNotificationMenuClose = () => {
        setNotificationAnchorEl(null);
        handleMobileMenuClose();
    };

    // USER NOTIFICATION MENU START
    const notificationMenuId = 'notification-menu';
    const renderNotificationMenu = (
        <Menu
            id={notificationMenuId}
            anchorEl={notificationAnchorEl}
            open={notificationOpen}
            onClose={handleNotificationMenuClose}
        >
            <NotificationTab handleNotificationMenuClose={handleNotificationMenuClose} />
        </Menu>
    );
    // USER NOTIFICATION MENU END

    // USER PROFILE MENU START
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu anchorEl={anchorEl} id={menuId} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuList dense>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemText>My profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemText>Report a problem</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemText>Help</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </MenuList>
        </Menu>
    );
    // USER PROFILE MENU END

    // MOBILE VIEW FOR RESPONSIVE START
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuList dense>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <Badge badgeContent={2} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </ListItemIcon>
                    Cart
                </MenuItem>
                <MenuItem aria-controls={notificationMenuId} onClick={handleNotificationMenuOpen}>
                    <ListItemIcon>
                        <Badge badgeContent={5} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </ListItemIcon>
                    Notifications
                    <ArrowDropDownIcon />
                </MenuItem>
                <MenuItem aria-controls={menuId} onClick={handleProfileMenuOpen}>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    Profile
                    <ArrowDropDownIcon />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <FormatSizeIcon />
                    </ListItemIcon>
                    <Font />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <PaletteIcon />
                    </ListItemIcon>
                    <Color />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <TranslateIcon />
                    </ListItemIcon>
                    <Language />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    Dashboard
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <NextPlanIcon />
                    </ListItemIcon>
                    Service
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    Login
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    Signup
                </MenuItem>
            </MenuList>
        </Menu>
    );
    // MOBILE VIEW FOR RESPONSIVE END

    // STUDENT USER DASHBOARD DRAWER OPEN ACTION
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state) => state.DashboardReducer.drawerOpen);
    const mobileDrawerOpen = useSelector((state) => state.DashboardReducer.mobileDrawerOpen);

    const handleDrawerOpen = () => {
        dispatch(drawerOpenAction(!drawerOpen));
        dispatch(mobileDrawerOpenAction(!mobileDrawerOpen));
    };

    return (
        <ThemeProvider theme={innerTheme}>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar variant="dense">
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, minWidth: '120px' }}
                    >
                        eSchool Journey
                    </Typography>
                    <Search />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Button color="inherit">Dashboard</Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Button color="inherit">Service</Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Color />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Font />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Language />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Notification
                            setNotificationAnchorEl={setNotificationAnchorEl}
                            notificationMenuId={notificationMenuId}
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 1 }}>
                        <IconButton size="small" color="inherit">
                            <Badge badgeContent={2} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Button variant="outlined" color="inherit">
                            Login
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Button variant="outlined" color="inherit">
                            Signup
                        </Button>
                    </Box> */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 0.5 }}>
                        <Profile setAnchorEl={setAnchorEl} menuId={menuId} />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="small"
                            aria-controls={mobileMenuId}
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {renderNotificationMenu}
        </ThemeProvider>
    );
};
export default SectionHeader;
