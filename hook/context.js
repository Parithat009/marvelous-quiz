import React from 'react'
// import {usePersistState} from './usePersistState'

const AppContext = React.createContext()

export const Context = (props) => {
  const [search, setSearch] = React.useState('')
  // const [store, setStore] = usePersistState('userId')

  const hook = {
    search, setSearch,
    // store, setStore
  }

  return (
    <AppContext.Provider value={hook}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return React.useContext(AppContext);
}