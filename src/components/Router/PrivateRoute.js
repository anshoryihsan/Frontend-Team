import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
function PrivateRoute(props) {
  const { component: Component, child, ...routeProps } = props

  const { token } = useSelector(state => state.Auth)
  return (
    <Route
      {...routeProps}
      render={props2 => token ? <Component child={child} {...props2} /> : <Redirect to="/auth" />}
    />
  )
}

export default PrivateRoute
