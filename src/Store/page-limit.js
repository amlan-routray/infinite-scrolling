import React, { useState } from 'react'

const PageLimit = props => {

    const [limit,setLimit] = useState(5)
    const addLimit = () => {
        setLimit(prev => prev<15?prev + 5:prev)
    }

    return (
        <LimitContext.Provider value={{limit:limit,addLimit:addLimit}}>
            {props.children}
        </LimitContext.Provider>
    )
}

export const LimitContext = React.createContext({limit:5,addlimit:() => {}});
export default PageLimit;

