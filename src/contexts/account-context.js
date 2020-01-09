import React, { useState } from 'react';

// const AccountContext = React.createContext();

// export function AccountStore({children}) {
//     const [accountObject, setAccountObject] = useState(null);

//     return (
//         <AccountContext.Provider value={{accountObject, setAccountObject}}>
//             {children}
//         </AccountContext.Provider>
//     )
// }

// export default AccountContext;


const account = {
    account_number: '11111',
    account_name: 'Fred'
}

export function AccountState({children}) {
    const [accountObject, setAccountObject] = useState(account);

    return (
        <AccountContext.Provider value={{accountObject, setAccountObject}}>
            {children}
        </AccountContext.Provider>
    )
}

export const AccountContext = React.createContext(account);