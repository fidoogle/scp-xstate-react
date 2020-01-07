import { Machine, assign } from 'xstate';
import loadData from '../services/select-account-data'

const options = {
    actions: {
        setAccount: assign((ctx, event) => ({
            account: event.account
        })),
        setData: assign((ctx, event) => ({
            data: event.data
        })),
        setMessage: assign((ctx, event) => ({
            message: event.data
        }))
    },
    activities: {
        /* ... */
    },
    guards: {
        /* ... */
    },
    services: {
        //simulate async fetch for more data
        loadData
    }
};

export const fetchMachine = Machine(
    {
        id: 'fetchMachine',
        initial: 'loading',
        context: {
            account: '11111',
            data: [],
            message: ''
        },
        states: {
            loading: {
                invoke: {
                    id: 'fetchData',
                    src: 'loadData',
                    onDone: { target: 'successful', actions: ['setData'] },
                    onError: { target: 'failed', actions: ['setMessage'] }
                }
            },
            failed: {
                on: {
                    FETCH: 'loading'
                }
            },
            successful: {
                on: {
                    SWITCH_ACCOUNT: {
                        target: 'loading',
                        actions: ['setAccount']
                    }
                }
            }
        }
    },
    options
);

export default fetchMachine;