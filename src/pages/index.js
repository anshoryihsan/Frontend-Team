// Desktop
import LandingPageDesktop  from "./Desktop/LandingPage/LandingPage"

import {
  Login,
  Register,
  AddPin,
  Success,
  ForgotPassword,
  NewPassword,
} from "./Desktop/Auth"
import {
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
  Logout,
} from "./Desktop/Dashboard"

// Mobile
import LandingPageMobile  from "./Mobile/LandingPage/LandingPage"

import {
  Login as LoginMobile,
  Register as RegisterMobile,
  AddPin as AddPinMobile,
  Success as SuccessMobile,
  ForgotPassword as ForgotPasswordMobile,
  NewPassword as NewPasswordMobile,
} from "./Mobile/Auth"
import {
  Main as MainMobile,
  Transfer as TransferMobile,
  History as HistoryMobile,
  TransferProcess as TransferProcessMobile,
  TransferConfirmation as TransferConfirmationMobile,
  TransferStatus as TransferStatusMobile,
  Topup as TopupMobile,
  Profile as ProfileMobile,
  ProfileInfo as ProfileInfoMobile,
  ProfileChangePass as ProfileChangePassMobile,
  ProfileManagePhone as ProfileManagePhoneMobile,
  ProfileAddPhone as ProfileAddPhoneMobile,
  ProfileChangePin as ProfileChangePinMobile,
  Notification as NotificationMobile,
  TransferPinConfirmation as TransferPinConfirmationMobile,
  Transaction as TransactionMobile,
} from './Mobile/Dashboard'

// Admin
import {
  Main as MainAdmin,
  Users as UsersAdmin,
  DetailUser as DetailUserAdmin,
  EditUser as EditUserAdmin,
  AddTopup as AddTopupAdmin,
  AddUser as AddUserAdmin,
  Topup as TopupAdmin,
} from "./Admin"

export {
  // Desktop
  LandingPageDesktop,
  Login,
  Register,
  AddPin,
  ForgotPassword,
  NewPassword,
  Success,
  Main,
  Transfer,
  History,
  TransferProcess,
  TransferStatus,
  TransferConfirmation,
  Topup,
  Profile,
  ProfileInfo,
  ProfileChangePass,
  ProfileManagePhone,
  ProfileAddPhone,
  ProfileChangePin,
  Logout,

  // Mobile
  LandingPageMobile,
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
  LoginMobile,
  RegisterMobile,
  AddPinMobile,
  SuccessMobile,
  ForgotPasswordMobile,
  NewPasswordMobile,

  // Admin
  MainAdmin,
  TopupAdmin,
  AddTopupAdmin,
  UsersAdmin,
  AddUserAdmin,
  DetailUserAdmin,
  EditUserAdmin,
}