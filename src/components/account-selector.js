import React, { useContext } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import UseStyles from '../components/styles';
import { StoreContext } from '../stores/store'


const MyComponent = () => {

    const classes = UseStyles();
    const { ['appInfo']: [dataApp, setDataApp] } = React.useContext(StoreContext); //fancy destructuring
    const { ['accountInfo']: [dataAccounts, setDataAccounts] } = useContext(StoreContext); //fancy destructuring

    return (
        
            <FormControl className={classes.formControl}>
                <Select
                onChange={(event) => setDataApp({...dataApp, selectedAccount: event.target.value})}
                defaultValue={dataAccounts[0]}
                >
                    {dataAccounts.map((acct, index) => (
                        <MenuItem value={acct} key={index}>0000{acct}-0011111-0001</MenuItem>
                    ))}
                </Select>
            </FormControl>
            
    )
}

export default MyComponent;