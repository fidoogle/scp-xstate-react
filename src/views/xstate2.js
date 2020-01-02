import React from "react";
//import { useService } from "@xstate/react";
import dataMachine from "../store/data-machine";
import { useMachine } from "@xstate/react";
import ChartContainer from '../components/chart-container'
import SimpleList from '../components/simple-list'


function View(props) {
    //const [current] = useService(props.service);
    // const [current, send] = useMachine(dataMachine);
    // const { data } = current.context;
    const initial = { entry: false };
    const initialMachine = dataMachine.withContext({...dataMachine.initialState.context, ...initial});
    console.log('Fidel initialState in xstate2:', initialMachine.initialState.value);
    const [current, send] = useMachine(initialMachine);
    const { data } = current.context;

    return (
        <div className="App">
            <div>This is a second chart on a different view that shares data with the chart on the other view.
            </div>

            <ChartContainer seriesData={data} />

            <SimpleList list={data}/>
        </div>
    );
}

export default View;
