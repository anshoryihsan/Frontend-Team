import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"

import "./styles.css"


function Auth({ child: Child }) {
  const history = useHistory()

  useEffect(() => {
    if (window.innerWidth > 500) return history.replace("/auth")
  }, [history])
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
