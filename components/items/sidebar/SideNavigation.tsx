import {createRef} from "react";
import {log} from "util";

export const sidebarRef = createRef<any>()

export const SideNavigation=()=>{
    return (
        <nav id="sidebar" ref={sidebarRef}>
            <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul className="list-unstyled components">
                <p onMouseEnter={e=>console.log('hihihihih')}>Dummy Heading</p>
            </ul>

            <ul className="list-unstyled CTAs">
            </ul>
        </nav>
    )
}

