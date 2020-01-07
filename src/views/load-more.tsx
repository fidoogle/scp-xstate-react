import React from "react";
import Button from '@material-ui/core/Button';
import ChartContainer from '../components/chart-container'
import SimpleList from '../components/simple-list'
import fetchMachine from "../machines/load-more-data";
import { useMachine } from "@xstate/react";

function View() {
    const [fetchState, sendToFetchMachine] = useMachine(fetchMachine);

    return (
        <div className="App">
            <div>Click the button to load more data. <br/>
            Notice there's two components on this page sharing the data: the chart and the chips below.
            </div>
            
            {fetchState.matches('loading') && <img src="/dot-loader.gif" height="20" />}

            <div style={{ background: "#e1e1e1" }}>
                {fetchState.matches('more') && 
                    <><Button variant="contained" color="primary"
                        onClick={() => {
                            sendToFetchMachine( { type: 'LOAD' })
                        }}
                    >Load More Data</Button> (up to 25 records)</>
                }

                {fetchState.matches('complete') && 
                    <Button variant="contained" color="primary"
                    onClick={() => {
                        sendToFetchMachine( { type: 'RESET' })
                    }}
                    >Reset</Button>
                }
                
            </div>

            <ChartContainer seriesData={fetchState.context.data} /> <SimpleList list={fetchState.context.data}/>

            {fetchState.matches('failed') && <p>{fetchState.context.message}</p>}
            
        </div>
    );
}

export default View;
