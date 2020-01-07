//From https://www.youtube.com/watch?v=XaHk9vhmus4
import { Machine, assign } from "xstate";
import { get } from 'lodash';
import loadMoreData from '../services/load-more-data'


const options = {
    actions: {
        /* ... */
    },
    activities: {
        /* ... */
    },
    guards: {
        /* ... */
    },
    services: {
        //simulate async fetch for more data
        loadMoreData
    }
};
const dataMachine = new Machine(
    {
        id: "dataMachine",
        //initial: "unknown", //https://xstate.js.org/docs/guides/events.html#null-events
        initial: "loading",
        context: {
            data: []
        },
        states: {
            loading: {
                invoke: {
                    id: "dataLoader",
                    src: "loadMoreData"
                },
                on: {
                    DONE_MORE: {
                        target: "more",
                        actions: assign({
                            data: ({ data }, { newData = [] }) => [...data, ...newData]
                        })
                    },
                    DONE_COMPLETE: {
                        target: "complete",
                        actions: assign({
                            data: ({ data }, { newData = [] }) => [...data, ...newData]
                        })
                    },
                    FAIL: "failure"
                }
            },
            more: {
                on: {
                    LOAD: "loading"
                }
            },
            complete: { 
                on: {
                    RESET: {
                        target: "loading",
                        actions: assign({
                            data: () => []
                        })
                    }
                }
            },
            failure: { type: "final" }
        }
    },
    options
);

export default dataMachine;