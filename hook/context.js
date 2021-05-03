import React from 'react'

const AppContext = React.createContext()

export const Context = (props) => {
  const [search, setSearch] = React.useState('thailand')
  const hook = {
    search, setSearch
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