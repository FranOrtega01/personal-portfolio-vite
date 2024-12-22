import React from 'react'
import "./Navbar.scss"
export const Navbar = ({scroll, active}) => {

    const sections = ["Home", "About", "Projects", "Contact"];

    return (
        <div className='navbar glass shadow'>
            {sections.map(s => <button key={`Navbar - ${s}`} className={s === active ? "active" : undefined} onClick={() => scroll(s)}>{s}</button> )}
        </div>
    )
}
