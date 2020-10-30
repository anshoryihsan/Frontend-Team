import React from 'react'

export function Alert(props) {
    const { type, show, message, onDimiss } = props
    return (
        <>
            {message ? (
          <div
            className={`mt-1 alert ${type} alert-dismissible fade ${
              show ? "show" : ""
            }`}
            role="alert"
          >
            {message}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={onDimiss}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          ""
        )}
        </>
    )
}
