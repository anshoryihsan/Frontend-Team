import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { options, SETAUTHERROR } from '../../redux/constant'
import { useDispatch } from 'react-redux'

import "./styles.css"


function Auth({ child: Child }) {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(options(SETAUTHERROR, ""))
    if (window.innerWidth > 500) return history.replace("/auth")
  }, [dispatch, history])
  return (
    <div className="bg-secondary d-flex justify-content-between flex-column vh-100">
      <div></div>
      <h3 className="text-primary text-center font-weight-bold py-4">Zwallet</h3>

      <div className="px-4 py-3 bg-white radius-top shadow-lg">
        <Child />
      </div>
    </div>
  )
}

export default Auth
