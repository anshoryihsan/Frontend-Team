import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Default() {
  const history = useHistory()
  useEffect(() => history.push("/auth"))

  return (
    <></>
  )
}

export default Default
