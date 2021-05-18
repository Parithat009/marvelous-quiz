import React from 'react'

export const usePersistState = (key) => {
  const [state, setState] = React.useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item || null
    } catch (error) {
      return null
    }
  })

  const setValue = (value) => {
    try {
      setState(value)
      localStorage.setItem(key, value)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(state);

  return [state, setValue]
}
