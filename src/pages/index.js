// Desktop
import {
  Login,
  Register,
  AddPin,
  Success
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
import {
  Login as LoginMobile,
  Register as RegisterMobile,
  AddPin as AddPinMobile,
  Success as SuccessMobile
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

export {
  // Desktop
  Login,
  Register,
  AddPin,
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
}