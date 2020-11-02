import React from 'react'
import { Link } from 'react-router-dom'
import { currency } from '../../helpers'

function History(props) {
  const { id, flat, className, name, type, src, amount, isIncome, status, mobile } = props

  const isMobile = mobile ? "/m" : ""

  const linkDirect = type === "topup" ? `${isMobile}/dashboard/topup/status?order_id=${id}` : `${isMobile}/dashboard/transfer/status/${id}`
  return (
    <div className={`d-flex align-items-center justify-content-between py-3 bg-white rounded-14 ${flat ? '' : 'shadow-sm px-3'} ${className}`}>
      <div className="d-flex align-items-center">
        <img
          className="rounded-14 object-cover"
          src={src ? src : "/assets/images/icons/default.svg"}
          height="56px"
          width="56px"
          alt="images"
        />
        <div className="pl-3">
          <Link className="font-weight-bold text-dark" to={linkDirect}>{name}</Link>
          <div className="small">{type}</div>
        </div>
      </div>

      <div>

        {
          type === "topup" ?
            <div className={` small text-right ${status === 1 ? "text-success" : "text-danger"}`}>
              {status === 1 ? "Success" : "Pending"}
            </div> :
            null
        }
        <div className={`${isIncome ? "text-success" : "text-danger"} font-weight-bold`}>
          {isIncome ? "+" : "-"} Rp {currency(amount)}
        </div>
      </div>
    </div>
  )
}

export default History
