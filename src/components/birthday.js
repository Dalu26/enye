import React from 'react'

const Birthday = (props) => {
  return (
    <input
      {...props}
      onChange={props.myChangeHandler}
    />
  )
}

export default Birthday
