//https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm

import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    //Initial data can be gathered from asynch request
    const accountNumbers = ['11111', '22222', '33333']
    const userProfile = {
        name: 'Pedro Smith',
        email: 'pedrosmith@gmail.com'
    }
    const appState = {
        selectedAccount: accountNumbers[0] //can be set to first accountNumber after they load
    }

    const [app, setApp] = React.useState(appState)
    const [user, setUser] = React.useState(userProfile)
    const [accounts, setAccounts] = React.useState(accountNumbers)

    const store = {
        appInfo: [app, setApp],
        userInfo: [user, setUser],
        accountInfo: [accounts, setAccounts],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}