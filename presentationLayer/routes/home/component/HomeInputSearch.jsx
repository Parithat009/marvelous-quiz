import React from 'react'
import IconSearch from '../../../icon/iconSearch'
import IconClose from '../../../icon/iconClose'

const HomeInputSearch = (props) => {
  const [isFocus, setFocus] = React.useState(false)

  const getInputContentStyle = () => {
    if (isFocus) return 'textInputContent contentFocus'
    else return 'textInputContent'
  }

  const getInputStyle = () => {
    if (isFocus) return 'textInput inputFocus'
    else return 'textInput'
  }

  const getIconStyle = () => {
    if (isFocus) return 'textInputIcon inputFocus'
    else return 'textInputIcon'
  }

  return (
    <div className='textInputContainer'>
      <div className={getInputContentStyle()}>
        <button
          type='button'
          className={getIconStyle()}
        >
          <IconSearch />
        </button>
        <input
          type='text'
          value={props.value}
          className={getInputStyle()}
          placeholder='Enter search'
          onChange={(e) => props.onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onKeyPress={(e) => props.onAction(e)}
        />
        <button
          type='button'
          className='textInputIcon'
          onClick={() => props.clear()}
        >
          <IconClose />
        </button>
      </div>
    </div>
  )
}

export default HomeInputSearch
