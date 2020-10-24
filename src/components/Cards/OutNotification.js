import React from 'react'
import { currency } from '../../helpers'

function InNotification(props) {
  const { label, amount } = props
  return (
    <div
      className="d-flex align-items-center shadow-sm rounded-14 pl-3 my-3 p-4"
    >
      <img
        alt="arrow-green"
        className="align-self-start"
        src={window.location.origin + "/assets/images/icons/arrow-up-red.svg"}
      />
      <div className="ml-3">
        <div className="small">{label}</div>
        <div className="font-weight-bold">Rp{currency(amount)}</div>
      </div>
    </div>
  )
}

export default InNotification
