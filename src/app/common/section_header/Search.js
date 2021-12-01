import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { alpha, createTheme, styled, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

// THEME FOR SEARCH COMPONENT START
const searchTheme = createTheme({
    typography: {
        fontFamily: ['"Open Sans"'].join(','),
        button: {
            fontSize: 14,
            textTransform: 'capitalize',
        },
    },
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    paddingLeft: '8px',
                    paddingRight: '0px',
                },
            },
        },
    },
});
// THEME FOR SEARCH COMPONENT END

const SearchUi = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '100%',
    },
}));

// SEARCH CATEGORIES ARRAY
const options = ['All', 'Course', 'Subject', 'Book'];

const Search = function () {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(2);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <ThemeProvider theme={searchTheme}>
            <SearchUi>
                <ButtonGroup
                    variant="contained"
                    color="error"
                    ref={anchorRef}
                    aria-label="split button"
                    sx={{ height: '32px', width: '100%' }}
                >
                    <Button
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        {options[selectedIndex]}
                        <ArrowDropDownIcon
                            sx={{
                                fontSize: '20px',
                            }}
                        />
                    </Button>
                    <InputBase
                        sx={{ ml: 1, flex: 1, fontSize: '14px' }}
                        placeholder="Search . . ."
                        inputProps={{ 'aria-label': 'search . . .' }}
                    />
                    <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </ButtonGroup>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    placement="bottom-start"
                >
                    {({ TransitionProps }) => (
                        <Grow
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...TransitionProps}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                selected={index === selectedIndex}
                                                onClick={(event) =>
                                                    handleMenuItemClick(event, index)
                                                }
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </SearchUi>
        </ThemeProvider>
    );
};
export default Search;
