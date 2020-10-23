import React from "react"
import Icons from "../../Icons"
import "./styles.css"

function index(props) {
  const {
    value,
    onChange,
    onFocus,
    isFocused,
    onBlur,
    label,
    iconName,
    type,
    iconRight,
    iconRightName,
    iconRightClick,
    iconRightActive,
  } = props

  return (
    <label className={`d-flex px-3 rounded-14 bordered-input align-items-center ${value !== "" || isFocused ? "active" : ""}`}>
      <Icons
        iconName={iconName}
        isActive={value !== "" || isFocused}
        iconHeight={24}
        iconWidth={28}
      />

      <input
        type={type || "text"}
        className="py-3 ml-3 w-100"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
      />

      {iconRight ? (
        <button className="p-0 btn" onClick={iconRightClick}>
          <Icons
            iconName={iconRightName}
            isActive={iconRightActive}
            iconHeight={24}
            iconWidth={28}
          />
        </button>
      ) : null}
    </label>
  )
}

export default index
