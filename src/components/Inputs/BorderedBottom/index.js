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
    prefix,
  } = props

  return (
    <label className={`d-flex bordered-bottom align-items-center ${value !== "" || isFocused ? "active" : ""}`}>
      <Icons
        iconName={iconName}
        isActive={value !== "" || isFocused}
        iconHeight={28}
        iconWidth={28}
      />

      {
        prefix ? (<div className="ml-2">{prefix}</div>) : null
      }

      <input
        type={type || "text"}
        className="py-3 ml-3 w-100"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        style={{ backgroundColor: "transparent" }}
      />

      {iconRight ? (
        <div className="p-0 btn" onClick={iconRightClick}>
          <Icons
            iconName={iconRightName}
            isActive={iconRightActive}
            iconHeight={24}
            iconWidth={28}
          />
        </div>
      ) : null}
    </label>
  )
}

export default index
