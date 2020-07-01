import React from 'react';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { withStyles, fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch'
            }
        }
    }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    }
}))(Badge);

const sections = [
    { title: 'Home', url: 'home' },
    { title: 'Products', url: 'articles' }
];

const NavBar = (props) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    const { selectedItems } = props.basketRed;

    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div role='presentation' onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <p style={{ textAlign: 'center', marginTop: 16 }}>Colorama</p>
            <Divider />
            <List style={{ width: 250 }}>
                {sections.map((section) => (
                    <ListItem button key={section}>
                        <Link style={{ color: 'black', textDecoration: 'none', marginRight: 16 }} to={section.url}>
                            {section.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const anchor = 'left';
    return (
        <AppBar>
            <React.Fragment key={anchor}>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
            <Toolbar>
                {!matches ? (
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='open drawer'
                        onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon />
                    </IconButton>
                ) : null}

                <Link to='home' className={classes.title} style={{ color: 'white', textDecoration: 'none' }}>
                    <Typography variant='h6' noWrap>
                        Colorama
                    </Typography>
                </Link>

                {matches ? (
                    <Toolbar className='nav-menu' component='nav' variant='dense'>
                        {sections.map((section) => (
                            <Link
                                key={section.title}
                                style={{ color: 'white', textDecoration: 'none', marginRight: 16 }}
                                to={section.url}>
                                {section.title}
                            </Link>
                        ))}
                    </Toolbar>
                ) : null}

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder='Search…'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <div style={{ marginLeft: 16, marginRight: 8 }}>
                    <Link to='basket' style={{ color: 'white' }}>
                        <StyledBadge badgeContent={selectedItems.length} color='secondary'>
                            <ShoppingCartOutlinedIcon />
                        </StyledBadge>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    basketRed: state.basketReducer
});

export default connect(mapStateToProps)(NavBar);
