import React, { useContext } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import UseStyles from '../components/styles';
import { StoreContext } from '../stores/store'


const MyComponent = () => {
    const classes = UseStyles();
    const { ['appInfo']: [dataApp, setDataApp] } = React.useContext(StoreContext); //fancy destructuring

    return (
        
            <FormControl className={classes.formControl}>
                <Select
                onChange={(event) => setDataApp({...dataApp, selectedAccount: event.target.value})}
                defaultValue="11111"
                >
                    <MenuItem value="11111">000011111-0011111-0001</MenuItem>
                    <MenuItem value="22222">000022222-0022222-0002</MenuItem>
                    <MenuItem value="33333">000033333-0033333-0003</MenuItem>
                </Select>
            </FormControl>
            
    )
}

export default MyComponent;