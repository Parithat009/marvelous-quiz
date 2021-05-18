import React from 'react'
import axios from 'axios'
import { useFela } from 'react-fela'

const Felafela = () => {
  const styles = useStyleSheet()

  // React.useEffect(() => {
  //   const onRetrieve = async() => {
  //     const response = await axios.get('http://localhost:4000/api/post')
  //   }
  //   onRetrieve()
  // }, [])

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        Felafeladdd
      </div>
    </div>
  )
}

const useStyleSheet = () => {
  const { css } = useFela()
  return {
    Container: css({
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: 'gray'
    }),
    Content: css({
      maxWidth: '320px',
      width: '100%',
      margin: '0.5rem auto',
      textAlign: 'center',
      backgroundColor: 'greenyellow'
    })
  }
}

export default Felafela
