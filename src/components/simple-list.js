import React from "react";
import UseStyles from '../components/styles';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const good = green[300];
const warning = red[400];

function View({list=[]}) {
    const classes = UseStyles();
    return (
        <>  <br/><br/>
            <Chip label="&lt; 3000" style={{backgroundColor: good}}/> &nbsp; <Chip label="&gt; 8000" style={{backgroundColor: warning}}/>
            <br/><br/>
            <div className={classes.flexContainer}>
                {list.length && list.map((row, index) => (
                    <Tooltip title={row.month=''} key={index}>

                        <Chip label={row.volume} style={{backgroundColor: row.volume<3000?good: (row.volume>8000?warning:'')}}/>
                    </Tooltip>
                ))}
            </div>
        </>
    );
}


export default View;