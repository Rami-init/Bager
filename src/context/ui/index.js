import { useContext, createContext, useState } from 'react'

export const UiContext =createContext()

export const UiProvider = ({ children })=>{
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    
    return <UiContext.Provider value={{drawerOpen, setDrawerOpen, showSearch, setShowSearch}}>
            {children}
        </UiContext.Provider>
}

export const useUiContext = ()=> useContext(UiContext)