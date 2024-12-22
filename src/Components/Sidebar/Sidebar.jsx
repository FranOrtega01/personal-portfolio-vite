import './Sidebar.scss'
import React, { useState, useEffect, useRef } from 'react'
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { CustomSwitch } from '../Inputs/CustomSwitch';


export const Sidebar = ({ setAllowMove, allowMove }) => {

    const [SidebarOpen, setSidebarOpen] = useState(false)

    const sideBarRef = useRef();

    const handleSidebar = () => {
        setSidebarOpen(!SidebarOpen)
    }

    const handleCloseOnClick = (e) => {
        if (!SidebarOpen) return;
        if (!sideBarRef.current.contains(e.target)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleCloseOnClick)
        return () => {
            window.removeEventListener("click", handleCloseOnClick);
        }
    }, [SidebarOpen])


    return (
        <div ref={sideBarRef}>
            <FaBars className='SidebarOpenBtn' onClick={handleSidebar} />
            <div style={SidebarOpen ? { transform: "scale(1)" } : { transform: "scale(0)" }} className='SidebarContainer glass shadow' >
                <FaXmark className='SidebarCloseBtn' onClick={handleSidebar} />
                <CustomSwitch name={"bg"} text={"Boring Background"} onToggle={() => setAllowMove(!allowMove)} isToggled={!allowMove} />
                <CustomSwitch name={"theme"} text={"Dark Theme"} />
            </div>
        </div>
    )
}