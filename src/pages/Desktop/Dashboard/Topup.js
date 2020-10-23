import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopup } from '../../../redux/actions/user'

function Transfer() {
  const [loading, setLoading] = useState(false)
  const { topup } = useSelector(state => state.User)
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true)
    dispatch(getTopup())
    setLoading(false)
  }, [dispatch])

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">How To Top Up</div>
        </div>

        {
          loading ? <div className="text-center small py-4">Loading ...</div> :
            topup.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4"
              >
                <div className="font-weight-bold text-primary align-self-start">
                  {index + 1}
                </div>
                <div className="small col">
                  {item.detail}
                </div>
              </div>
            ))
        }

      </div>
    </>
  )
}

export default Transfer
