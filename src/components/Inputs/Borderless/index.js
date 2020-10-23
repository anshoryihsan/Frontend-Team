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
    iconHeight,
    iconWidth,
    type,
    fontSize,
    fontColor,
    weight,
    iconRight,
    iconRightName,
    iconRightClick,
    iconRightActive,
  } = props

  return (
    <label className={`d-flex borderless align-items-center ${value !== "" || isFocused ? "active" : ""}`}>
      <Icons
        iconName={iconName}
        isActive={value !== "" || isFocused}
        iconHeight={iconHeight}
        iconWidth={iconWidth}
      />

      <input
        type={type || "text"}
        className={`py-3 mx-3 w-100 text-center font-weight-${weight}`}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        style={{ fontSize: fontSize, color: `var(--color-${fontColor})` }}
      />

      {
        iconRight ? (
          <button className="p-0 btn" onClick={iconRightClick} >
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
