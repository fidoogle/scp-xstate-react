import React from 'react';
import UseStyles from '../components/styles';
import { Box, Chip, Grid, Paper, Typography } from '@material-ui/core';
import BarChart from '../components/bar-chart'
import BillSlider from '../components/slider'

// import dynamic from 'next/dynamic'
// const SliderComponentWithNoSSR = dynamic(import('../components/slider2'), {
//     ssr: false
// })

export default function NavPrimary() { 
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
                    <Grid item xs={12} sm={5}
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <div className={classes.title}>Balance Due</div>
                        <div>
                            <img src="/bill-left.PNG"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7}
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <div className={classes.title}>Monthly Usage</div>
                        <div>
                            <BarChart/>
                        </div>
                        <div className={classes.title}>Bill History</div>
                    </Grid>
                </Grid>
                <BillSlider />
            </div>
        </>
    );
}