import React, { useContext } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import UseStyles from '../components/styles';
import { MachineContext } from '../components/global-machine-context';
import { interpret } from 'xstate';
import { useMachine } from '@xstate/react';


const MyComponent = () => {
    const classes = UseStyles();
    const machine = useContext(MachineContext);
    console.log('Fidel machine', {machine})
    const [state, send] = useMachine(machine);

    // Interpret the machine
    //const service = interpret(machine);

    // Add a state listener, which is called whenever a state transition occurs.
    // service.onTransition(state => {
    // console.log(state.value);
    // });

    // service.start(previousState);

    return (
        
            <FormControl className={classes.formControl}>
                <Select
                onChange={(event) => send('SWITCH_ACCOUNT', {account: event.target.value})}
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