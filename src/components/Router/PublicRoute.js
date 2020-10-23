import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PublicRoute(props) {
  const { component: Component, child: Child, restricted, ...routeProps } = props
  const { token, role } = useSelector(state => state.Auth)
  const isRestricted = token && restricted

  return (
    <Route
      {...routeProps}
      render={props2 => isRestricted ? <Redirect to={role === "admin" ? "/admin" : "/dashboard"} /> : <Component child={Child} {...props2} />}
    />
  )
}

export default PublicRoute
