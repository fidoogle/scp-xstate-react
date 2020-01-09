import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, FormControl, MenuItem, NativeSelect, Select } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ListIcon from '@material-ui/icons/List';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import { NavLink } from 'react-router-dom';
//import AccountSelector from './account-selector';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        '& > .fa': {
            margin: theme.spacing(2),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: 'white',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }, 
    nav: {
        background: 'linear-gradient(to bottom, #0078ae, #5691c8)',
        display: 'flex',
        'justify-content': 'space-between',
        'align-items': 'center',
    },
    navRow: {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
    },
    navColumn: {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'flex-start',
    },
    navRight: {
        
    }
}));

export default function NavPrimary() { 
    const classes = useStyles();

    return (
        <div className={classes.nav}>
            <div className={classes.navRow}>
                <NavLink to="/my-bill" activeClassName='selected'>My Bill</NavLink>
                <NavLink to="/my-use" activeClassName='selected'>My Use</NavLink>
                <NavLink to="/my-uplift" activeClassName='selected'>My Uplift</NavLink>
                <NavLink to="/schedule-move" activeClassName='selected'>Schedule A Move</NavLink>
                <NavLink to="/contact-us" activeClassName='selected'>Contact Us</NavLink>
                <NavLink to="/load-more" activeClassName='selected'>Load More</NavLink>
                <NavLink to="/select-account" activeClassName='selected'>Select Acct</NavLink>
            </div>
            <div className={classes.navRow}>
                <div className={classes.navColumn}>
                    <label>Select Account</label>
                    <div className={classes.navRow}>
                        
                        <Box bgcolor={green[700]} color={grey[50]}><ListIcon/></Box>
                    </div>
                </div>
                <a>
                    <div className={classes.navRow}>
                        <Icon className="fa fa-cog" style={{ color: grey[50] }} />
                        <div className="fa-text">
                            Manage <br/>Accoungts
                        </div>
                    </div>
                </a>
            </div>

            <style jsx="true">{`
                a {
                    color: white;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 24px;
                    height: 100px;
                    padding: 0 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                a:hover {
                    background-color: #e56208; 
                }
                a.selected {
                    background-color: #e56208;
                }
                label {
                    color: white;
                }
                `}</style>
        </div>
    );
}