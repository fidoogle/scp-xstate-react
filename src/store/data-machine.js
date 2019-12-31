import { Machine, assign } from "xstate";


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


const dataMachine = new Machine({
    id: "dataMachine",
    initial: "loading",
    context: {
        data: []
    },
    states: {
        loading: {
            invoke: {
                id: "dataLoader",
                src: (context, _event) => {
                    return (callback, _onEvent) => {
                        setTimeout(() => { //Simulate an API Call
                            const { data } = context;
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
});

export default dataMachine;