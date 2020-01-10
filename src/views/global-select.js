import React from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@material-ui/core';
import UseStyles from '../components/styles';
import { StoreContext } from '../stores/store'


const Page = () => {
    const classes = UseStyles();

    // Get global shared data
    const { ['appInfo']: [dataApp, setDataApp] } = React.useContext(StoreContext); //fancy destructuring
    const { ['accountInfo']: [dataAccount, setDataAccount] } = React.useContext(StoreContext); //fancy destructuring

    console.log('Fidel',  {dataApp}, {dataAccount})
    return (
        <>
            <div className={classes.root}>
                Uses React.useContext to share the global select component (upper right) with the chart below.

            </div>
        </>
    )
}

export default Page;