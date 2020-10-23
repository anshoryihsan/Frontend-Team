import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Admin() {
  const history = useHistory()
  const { role } = useSelector(state => state.Auth)

  useEffect(() => {
    if (role !== "admin") history.push("/dashboard")
  }, [history, role])

  return (
    <div>
      <h1>
        Weeee Ini Halaman Adminnya kakak
      </h1>

      <Link className="d-block" to="/logout">Logout disini pak</Link>
      <Link className="d-block" to="/dashboard">Admin juga bisa akses dashboard lhoo!!</Link>
    </div>
  )
}

export default Admin
