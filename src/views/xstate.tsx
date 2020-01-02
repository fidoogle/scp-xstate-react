import React from "react";
import Button from '@material-ui/core/Button';
import ChartContainer from '../components/chart-container'
import SimpleList from '../components/simple-list'

import { loadBarData2 } from '../services/chart-data';
import { fetchMachine } from "../machines/fetch";
import { useMachine } from "@xstate/react";

function View() {
    const [fetchState, sendToFetchMachine] = useMachine(fetchMachine, {
        actions: {
            fetchData: (ctx, event) => {
                loadBarData2()
                    .then(
                        //success
                        (response:any) => {
                            sendToFetchMachine({ type: 'RESOLVE', results: response })
                        },
                        //failed
                        message => {
                            sendToFetchMachine({ type: 'REJECT', message })
                        }
                    )
            }
        }
    });

    return (
        <div className="App">
            <div>Click the button to load more data. Notice there's two components on this page sharing the data.
            <br />Refresh the page and switch between this view and XState2. This is true state sharing across components/views.
            </div>
            
            <div style={{ background: "#e1e1e1" }}>
                <Button variant="contained" color="primary"
                    onClick={() => {
                        sendToFetchMachine( { type: 'FETCH' })
                    }}
                >
                    Load Data
                </Button> (up to 25 records)
            </div>
            
            {fetchState.matches('pending') && <img src="/dot-loader.gif" height="20" />}

            {fetchState.matches('successful') && <ChartContainer seriesData={fetchState.context.results} />}

            {fetchState.matches('failed') && <p>{fetchState.context.message}</p>}
            
        </div>
    );
}

export default View;
