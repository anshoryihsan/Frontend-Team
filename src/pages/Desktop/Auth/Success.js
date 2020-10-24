import React from 'react'
import { useHistory } from 'react-router-dom'


function Success() {
  const history = useHistory()

  const _onClick = () => {
    history.push("/dashboard")
  }

  return (
    <>
      <img src={window.location.origin + "/assets/images/icons/success-circle.svg"} height="70px" width="70px" alt="images" />
      <h4 className="font-weight-bold my-3">
        Your PIN Was Successfully Created.
      </h4>

      <div className="text-black-50 my-4">
        Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!
      </div>

      <button
        onClick={_onClick}
        className="btn btn-primary w-100 py-2 rounded-8 d-block mt-4"
      >
        To Dashboard
      </button>
    </>
  )
}

export default Success