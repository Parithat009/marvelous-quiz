import React from 'react'
import LayoutHeader from './component/LayoutHeader'
import LayoutDefaultContainer from './component/LayoutDefaultContainer'

const LayoutDefault = (props) => {
  return (
    <React.Fragment>
      <LayoutHeader />
      <LayoutDefaultContainer>
        {props.children}
      </LayoutDefaultContainer>
    </React.Fragment>
  )
}

export default LayoutDefault
