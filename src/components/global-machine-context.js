//For State and Context
import React, { useContext } from 'react';
import fetchMachine from "../machines/select-account";
//import { useMachine } from "use-machine";  //https://github.com/carloslfu/use-machine
import { useMachine } from "@xstate/react";


export const MachineContext = React.createContext();


export function MachineStore(props) {
    const globalMachine = useMachine(fetchMachine);

    return (
        <MachineContext.Provider value={globalMachine}>
            {props.children}
        </MachineContext.Provider>
    )
}
