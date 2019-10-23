import React from 'react'

const Calendar = (props) => {
  return (
    <input
      {...props}
      onChange={props.myChangeHandler}
    />
  )
}

export default Calendar;