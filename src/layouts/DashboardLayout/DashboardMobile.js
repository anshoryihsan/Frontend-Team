import React, { useState, useEffect } from "react"
import { useMedia } from "use-media"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { UserLoad } from '../../redux/actions/user'
import { ModalResponsive } from '../../components/Modal'

function DashboardMobile({ child: Child }) {
  const isMobile = useMedia({ minWidth: "501px" })
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const { token } = useSelector(state => state.Auth)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (window.innerWidth > 500) return history.replace("/dashboard")
    setLoading(true)
    dispatch(UserLoad(token, history))
    setLoading(false)
  }, [dispatch, history, token])

  useEffect(() => {
    if (!modal) setModal(isMobile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])

  return (
    <>
      <ModalResponsive
        show={modal}
        device="Desktop"
        onDismiss={() => setModal(false)}
        onContinue={() => history.replace("/dashboard")}
      />
      {
        loading ?
          <div className="vh-100 text-dark justify-content-center align-items-center">Loading ...</div> :
          <div className="p-3 bg-secondary vh-100">
            <Child />
          </div>
      }

    </>
  )
}

export default DashboardMobile
