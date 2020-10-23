import React, { useState } from 'react'
import "./styles.css"

function Border(props) {
  const { length, onChange, className } = props
  const inputLength = useState(Array(length).fill(''))[0]
  const createRef = []

  const _onChangeInput = (i, value) => {
    let currentIndex = i
    inputLength[i] = value

    if (value.length === 1 && i < length - 1) {
      currentIndex += 1;
      createRef[currentIndex].focus();
    }

    const pinString = inputLength.join('')
    onChange(pinString)
  }

  const _onBackspace = (i, key) => {
    if (key === "Backspace") {
      if (!inputLength[i]) {
        if (i > 0) createRef[i - 1].focus()
      }
    }
  }

  return (
    <>
      {
        inputLength.map((_, k) => (
          <div key={k} className={className}>
            <input
              ref={input => createRef[k] = input}
              onChange={e => _onChangeInput(k, e.target.value)}
              onKeyDown={e => _onBackspace(k, e.key)}
              className="input-bordered-small font-weight-bold rounded-14"
              type="text"
              maxLength="1"
              placeholder="_"
            />
          </div>
        ))
      }
    </>
  )
}

export default Border
