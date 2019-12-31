import React from "react";
import Button from '@material-ui/core/Button';
import { useMachine } from "@xstate/react";
// import dataMachine from "../store/data-machine";
import { useService } from "@xstate/react";
import ChartContainer from '../components/chart-container'
import SimpleList from '../components/simple-list'

function View(props) {
    //const [current, send] = props; //useService(props.service);
    const [current, send] = useMachine(props.dataMachine);
    const { data } = current.context;

    return (
        <div className="App">
            <div>Click the button to load more data. Notice there's two components on this page sharing the data.
            <br/>Refresh the page and switch between this view and XState2. This is true state sharing across components/views.
            </div>
            {current.matches("more") && (
                <div style={{ background: "#e1e1e1" }}>
                    <Button variant="contained" color="primary"
                        onClick={() => {
                            send("LOAD");
                        }}
                    >
                        Load More Data
                    </Button> (up to 25 records)
                </div>
            )}
            
            {current.matches("loading") && <img src="/dot-loader.gif" height="20" />}

            <ChartContainer seriesData={data} />
            <SimpleList list={data}/>
        </div>
    );
}

export default View;
