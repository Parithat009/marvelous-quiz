import React from 'react'
import { useFela } from 'react-fela'

const Felafela = () => {
  const styles = useStyleSheet()
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        Felafela
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
      backgroundColor: 'green'
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
