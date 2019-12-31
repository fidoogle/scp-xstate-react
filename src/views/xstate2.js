import React from "react";
//import { useService } from "@xstate/react";
import { useMachine } from "@xstate/react";
import ChartContainer from '../components/chart-container'

function View(props) {
    //const [current] = useService(props.service);
    const [current, send] = useMachine(props.dataMachine);
    const { data } = current.context;

    return (
        <div className="App">
            <div>This is a second chart on a different view that shares data with the chart on the other view.
            </div>

            <ChartContainer seriesData={data} />
        </div>
    );
}

export default View;
