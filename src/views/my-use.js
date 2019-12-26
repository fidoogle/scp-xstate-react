import React from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@material-ui/core';
import UseStyles from '../components/styles';

const Page = () => {
    const classes = UseStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid 
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item xs={12} sm={4}>
                        <div className={classes.title}> &nbsp; </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.title}>Monthly Use</div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Page;