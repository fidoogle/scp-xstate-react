import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import UseStyles from '../components/styles';


const Component = (props) => {
    const classes = UseStyles();
    const [balances, setBalances] = useState(null);

    //Watch prop changes
    useEffect(() => setBalances(props.balances), [props.balances]);

    return (
        <>
            <div className={classes.title}>Balance Due</div>
            {balances ? 
                <div className={classes.orangebill}>${balances.totalbalance}</div> : <CircularProgress />
            }
            
            <div>
                <img src="/bill-left.PNG"/>
            </div>
        </>
    )
}

export default Component;