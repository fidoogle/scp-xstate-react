import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Chip, Grid, Paper, Typography } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import Icon from '@material-ui/core/Icon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '20px',
    },
    paper: {
        fontSize: '20px',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function NavPrimary() { 
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                            <img 
                                height="80"
                                src="https://secureaccess.saws.org/azuredev/images/Logo-25.png"/>
                        
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="primary">My Account</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={6}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Box bgcolor={green[700]} xs={12}>
                            <img 
                                src="https://via.placeholder.com/150x30.png/388e3c/fff?text=Uplift"/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <AccountCircleIcon fontSize="large"/>
                        </Grid>
                        <Grid item>
                            <Chip label={5} color="secondary"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                Hello SCPTest
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ExpandMoreIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}