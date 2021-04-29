import {useState} from "react";
import {Navbar, Container, Button, Nav} from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image';
import {sidebarRef} from "../sidebar/SideNavigation";

export const TopNavigation = () => {
    const [toggleSide, setToggleSide] = useState(true)

    const handleClick = (e) => {
        sidebarRef.current.classList.toggle('active')
        setToggleSide(!toggleSide)
    }
    return (
        <nav id='navbar' className='navbar'>
            <div className="container-fluid">
                <button onClick={handleClick} type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"/>
                </button>
            </div>
        </nav>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <button onClick={handleClick} type="button" id="sidebarCollapse" className="btn btn-info">
        //             <i className="fas fa-align-left"/>
        //         </button>
        //     </div>
        // </nav>
    )
}