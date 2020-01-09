import React from "react";
import ChartContainer from '../components/chart-container'
import SimpleList from '../components/simple-list'
import fetchMachine from "../machines/select-account";
import { useMachine } from "@xstate/react";
import { Button, FormControl, MenuItem, NativeSelect, Select } from '@material-ui/core';


function View(props) {
    const [fetchState, sendToFetchMachine] = useMachine(fetchMachine);
    const { data } = fetchState.context;

    return (
        <div className="App">
            <div>Uses XState to synchronize the drop list of accounts with the chart.</div>

            {fetchState.matches('loading') && <img src="/dot-loader.gif" height="20" />}
            
            <FormControl>
                <Select
                onChange={(event) => sendToFetchMachine('SWITCH_ACCOUNT', {account: event.target.value})}
                defaultValue="11111"
                >
                    <MenuItem value="11111">000011111-0011111-0001</MenuItem>
                    <MenuItem value="22222">000022222-0022222-0002</MenuItem>
                    <MenuItem value="33333">000033333-0033333-0003</MenuItem>
                </Select>
            </FormControl>

            <ChartContainer seriesData={data} />

            <SimpleList list={data}/>
        </div>
    );
}

export default View;
