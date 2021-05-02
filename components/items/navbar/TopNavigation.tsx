import {useState} from "react";
import Link from 'next/link'
import Image from 'next/image';
import {sidebarRef} from "../sidebar/SideNavigation";
import {SearchBox} from "../../utils/search-box/SearchBox";

export const TopNavigation = () => {
    const [toggleSide, setToggleSide] = useState(true)

    const handleClick = (e) => {
        sidebarRef.current.classList.toggle('active')
        setToggleSide(!toggleSide)
    }
    return (
        <nav className="navbar">
            <div className="container-fluid p-2 px-3">
                <button onClick={handleClick} className="navbar-toggler me-2" type="button" style={{zIndex: 2000}} >
                    <i className="fas fa-align-justify"/>
                </button>

                <SearchBox/>
                <div className="ms-auto">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav id='navbar' className='navbar navbar-expand-xs navbar__wrapper bg-danger w-100'>
        //     <div className="container w-100">
        //         <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //                 aria-expanded="false" aria-label="Toggle navigation">
        //             <i className="bi bi-toggle-off"/>
        //         </button>
        //         <input type="text"/>
        //
        //         <div className='float-end'>
        //             <ul className="nav navbar-nav">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="#">Page</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Page</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Page</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Page</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <button onClick={handleClick} type="button" id="sidebarCollapse" className="btn btn-info">
        //             <i className="fas fa-align-left"/>
        //         </button>
        //     </div>
        // </nav>
    )
}