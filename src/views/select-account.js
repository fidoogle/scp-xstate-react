import React, { useContext } from "react";
import ChartContainer from '../components/chart-container'
import SimpleList from '../components/simple-list'
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { MachineContext } from '../components/global-machine-context';
import { interpret } from 'xstate';
import { useMachine } from '@xstate/react';



function View() {
    const machine = useContext(MachineContext);

    // Interpret the machine
    //const service = interpret(machine);
    const [state, send] = useMachine(machine);


    return (
        <div className="App">
            <div>Uses XState to synchronize the drop list of accounts with the chart.</div>

            {state.matches('loading') && <img src="/dot-loader.gif" height="20" alt=""/>}
            
            <FormControl>
                <Select
                onChange={(event) => send('SWITCH_ACCOUNT', {account: event.target.value})}
                defaultValue="11111"
                >
                    <MenuItem value="11111">000011111-0011111-0001</MenuItem>
                    <MenuItem value="22222">000022222-0022222-0002</MenuItem>
                    <MenuItem value="33333">000033333-0033333-0003</MenuItem>
                </Select>
            </FormControl>

            <ChartContainer seriesData={state.context.data} />

            <SimpleList list={state.context.data}/>
        </div>
    );
}

export default View;