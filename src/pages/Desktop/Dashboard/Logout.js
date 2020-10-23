import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { AuthLogout } from '../../../redux/actions/auth'

function Logout() {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(AuthLogout(history))
  }, [dispatch, history])

  return (
    <></>
  )
}

export default Logout
