import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './components/Router'
import { Auth, Dashboard } from './layouts';
import { Login, Register } from './pages'
import {
  // Desktop
  Main,
  Transfer,
  History,
  TransferProcess,
  TransferConfirmation,
  TransferStatus,
  Topup,
  Profile,
  ProfileInfo,
  ProfileChangePass,
  ProfileManagePhone,
  ProfileAddPhone,
  ProfileChangePin,
  AddPin,
  Success,
  Logout,

  // Mobile
  MainMobile,
  TransferMobile,
  HistoryMobile,
  TransferProcessMobile,
  TransferConfirmationMobile,
  TransferStatusMobile,
  TopupMobile,
  ProfileMobile,
  ProfileInfoMobile,
  ProfileChangePassMobile,
  ProfileManagePhoneMobile,
  ProfileAddPhoneMobile,
  ProfileChangePinMobile,
  NotificationMobile,
  TransferPinConfirmationMobile,
  TransactionMobile,
} from "./pages"

import Admin from './pages/Desktop/Dashboard/Admin';

function App() {
  return (
    <Router>
      <RouteDesktop />
      <RouteMobile />
    </Router>
  );
}

function RouteMobile() {
  return (
    <Switch>
      <PrivateRoute exact path="/m/dashboard" component={MainMobile} />
      <PrivateRoute exact path="/m/dashboard/notification" component={NotificationMobile} />
      <PrivateRoute exact path="/m/dashboard/transaction" component={TransactionMobile} />
      <PrivateRoute exact path="/m/dashboard/transfer" component={TransferMobile} />
      <PrivateRoute exact path="/m/dashboard/transfer/:id" component={TransferProcessMobile} />
      <PrivateRoute exact path="/m/dashboard/transfer/status/:id?" component={TransferStatusMobile} />
      <PrivateRoute exact path="/m/dashboard/transfer/:id?/confirm" component={TransferConfirmationMobile} />
      <PrivateRoute exact path="/m/dashboard/transfer/:id?/confirm/pin" component={TransferPinConfirmationMobile} />
      <PrivateRoute exact path="/m/dashboard/history" component={HistoryMobile} />
      <PrivateRoute exact path="/m/dashboard/topup" component={TopupMobile} />
      <PrivateRoute exact path="/m/dashboard/profile" component={ProfileMobile} />
      <PrivateRoute exact path="/m/dashboard/profile/info" component={ProfileInfoMobile} />
      <PrivateRoute exact path="/m/dashboard/profile/change_password" component={ProfileChangePassMobile} />
      <PrivateRoute exact path="/m/dashboard/profile/manage_phone" component={ProfileManagePhoneMobile} />
      <PrivateRoute exact path="/m/dashboard/profile/add_phone" component={ProfileAddPhoneMobile} />
      <PrivateRoute exact path="/m/dashboard/profile/change_pin" component={ProfileChangePinMobile} />
    </Switch>
  )
}

function RouteDesktop() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Redirect to="/auth" {...props} />} />
      <PublicRoute restricted={true} exact path="/auth/signup" component={Auth} child={Register} />
      <PublicRoute restricted={true} exact path="/auth" component={Auth} child={Login} />
      <PrivateRoute exact path="/auth/create-pin" component={Auth} child={AddPin} />
      <PrivateRoute exact path="/auth/success" component={Auth} child={Success} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} child={Main} />
      <PrivateRoute exact path="/dashboard/transfer" component={Dashboard} child={Transfer} />
      <PrivateRoute exact path="/dashboard/transfer/:id" component={Dashboard} child={TransferProcess} />
      <PrivateRoute exact path="/dashboard/transfer/status/:id?" component={Dashboard} child={TransferStatus} />
      <PrivateRoute exact path="/dashboard/transfer/:id?/confirm" component={Dashboard} child={TransferConfirmation} />
      <PrivateRoute exact path="/dashboard/history" component={Dashboard} child={History} />
      <PrivateRoute exact path="/dashboard/topup" component={Dashboard} child={Topup} />
      <PrivateRoute exact path="/dashboard/profile" component={Dashboard} child={Profile} />
      <PrivateRoute exact path="/dashboard/profile/info" component={Dashboard} child={ProfileInfo} />
      <PrivateRoute exact path="/dashboard/profile/change_password" component={Dashboard} child={ProfileChangePass} />
      <PrivateRoute exact path="/dashboard/profile/manage_phone" component={Dashboard} child={ProfileManagePhone} />
      <PrivateRoute exact path="/dashboard/profile/add_phone" component={Dashboard} child={ProfileAddPhone} />
      <PrivateRoute exact path="/dashboard/profile/change_pin" component={Dashboard} child={ProfileChangePin} />
      <PrivateRoute exact path="/logout" component={Logout} />
      <PrivateRoute exact path="/admin" component={Admin} />
    </Switch>
  )
}

export default App;