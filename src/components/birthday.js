import React from 'react'

const Birthday = (props) => {
  return (
    <input
      type="date"
      id="birthday"
      name="birthday"
      class="form-control mb-4"
      placeholder="Birthday"
      onChange={props.myChangeHandler}
    />

  )
}

export default Birthday
