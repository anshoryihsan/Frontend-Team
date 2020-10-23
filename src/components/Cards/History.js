import React from 'react'
import { currency } from '../../helpers'

function History(props) {
  const { flat, className, name, type, src, amount, isIncome } = props

  return (
    <div className={`d-flex align-items-center justify-content-between py-3 bg-white rounded-14 ${flat ? '' : 'shadow-sm px-3'} ${className}`}>
      <div className="d-flex align-items-center">
        <img
          src={src ? src : '/assets/images/1.png'}
          height="56px"
          width="56px"
          alt="images"
        />
        <div className="pl-3">
          <div className="font-weight-bold">{name}</div>
          <div className="small">{type}</div>
        </div>
      </div>

      <div className={`${isIncome ? "text-success" : "text-danger"} font-weight-bold`}>
        {isIncome ? "+" : "-"} Rp {currency(amount)}
      </div>
    </div>
  )
}

export default History
