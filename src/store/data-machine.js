//From https://www.youtube.com/watch?v=XaHk9vhmus4
import { Machine, assign } from "xstate";
import { get } from 'lodash';

// For simulating data
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const getNearest100 = (min, max) => {
    const rnd = getRndInteger(min, max);
    return Math.round(rnd/100)*100; //rounds to nearest 100
}
const buildDataValue = (i) => {
    return ({ month: `Month ${i}`, volume: getNearest100(500, 9900) });
}
const allData = new Array(25).fill(0).map((_val, i) => buildDataValue(i));
const perPage = 10;


//const isEntry = ({ entry }) => entry;
const dataMachine = new Machine(
    {
        id: "dataMachine",
        initial: "unknown", //https://xstate.js.org/docs/guides/events.html#null-events
        context: {
            data: []
        },
        states: {
            unknown: {
                on: {
                    // immediately take transition that satisfies conditional guard.
                    // otherwise, no transition occurs
                    '': [
                        { target: 'loading', cond: 'isEntry' },
                        { target: 'complete' }
                    ]
                }
            },
            loading: {
                invoke: {
                    id: "dataLoader",
                    src: "loadData"
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
            complete: { type: "final" },
            failure: { type: "final" }
        }
    },
    {
        actions: {
            /* ... */
        },
        activities: {
            /* ... */
        },
        guards: {
            isEntry: (context, _event) => {
                //return get(context, 'data.length', 0) === 0;
                return get(context, 'entry', false);
            }
        },
        services: {
            loadData: (context, _event) => {console.log('Fidel2 floading data', context)
                return (callback, _onEvent) => {console.log('Fidel floading data')
                    setTimeout(() => { //Simulate an API Call
                        const { data }= context; //get(context, 'data', []);
                        const newData = allData.slice(data.length, data.length + perPage);
                        const hasMore = newData.length === perPage;

                        if (hasMore) {
                            callback({ type: "DONE_MORE", newData });
                        } else {
                            callback({ type: "DONE_COMPLETE", newData });
                        }
                    }, 1000);
                };
            }
        }
    }
);

export default dataMachine;