import React from "react";
import UseStyles from '../components/styles';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const good = green[400];
const warning = red[400];

function View({list}) {
    const classes = UseStyles();
    return (
        <div className={classes.flexContainer}>
            {list && list.map(row => (
                <Tooltip title={row.month} key={row.month}>

                    <Chip label={row.volume} style={{backgroundColor: row.volume<3000?good: (row.volume>8000?warning:'')}}/>
                </Tooltip>
            ))}
        </div>
    );
}


export default View;