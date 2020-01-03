import React, { useEffect, useState } from "react";
import UseStyles from '../components/styles';
import { Box, Chip, Grid, Paper, Typography } from '@material-ui/core';
import BarChart from '../components/bar-chart'
import BillHighlights from '../components/bill-highlights'
import BillSlider from '../components/slider'
import { loadBalance } from '../services/chart-data';


// import dynamic from 'next/dynamic'
// const SliderComponentWithNoSSR = dynamic(import('../components/slider2'), {
//     ssr: false
// })

export default function MyBillView() { 
    const classes = UseStyles();

    const [balances, setBalances] = useState(null);

    useEffect(() => {
        //load data from backend
        loadBalance()
            .then((response) => {
                setBalances(response);
            })
    }, []);

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
                        <BillHighlights balances={balances}/>
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
                <br/>
                <BillSlider />
            </div>
        </>
    );
}