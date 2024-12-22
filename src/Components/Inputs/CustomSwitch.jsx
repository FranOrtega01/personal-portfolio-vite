import "./CustomSwitch.scss"
import React from 'react'

export const CustomSwitch = ({name,text, isToggled, onToggle}) => {
  return (
    <label htmlFor={name} className="CustomSwitch">
        {text}
        <input name={name} id={name} type="checkbox" checked={isToggled} onChange={onToggle}/>
        <span className="shadow"></span>
    </label>
  )
}
