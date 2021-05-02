import {createRef} from "react";
import Link from "next/link";
import Image from "next/image";

export const sidebarRef = createRef<any>()

const links = [
    {linkTo: '/#title', title: 'Lorem ipsum', icon: '/assets/icons/yonetim.svg', active: true},
    {linkTo: '/#lorem', title: 'Dalor fit', icon: "/assets/icons/truck.svg", active: false},
    {linkTo: '/#logout', title: 'Logout', icon: "/assets/icons/logout.svg", active: false},
]

export const SideNavigation = () => {
    return (
        <nav id="sidebar" className={'sidebar active'} ref={sidebarRef}>
            <div className="sidebar__header">
                <div className={'sidebar__header-logo'}/>
                <div className="container-fluid sidebar__profile">
                    <div className="row align-items-center m-0">
                        <div className='col-3'>
                            <img src="/assets/images/img.png" width={30} height={30}
                                 className='rounded-circle sidebar__profile-img' alt=""/>
                        </div>

                        <div className="col-9 sidebar__profile-content">
                            <div className={'sidebar__profile-title'}>
                                Title title
                            </div>
                            <div className='sidebar__profile-body'>
                                Body
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__body">
                <ul className="list-unstyled components">
                    {links.map((e, i) => (
                        <Link key={i} href={e.linkTo}>
                            <a className='sidebar__body-link'>
                                <li className={`sidebar_body-list ${e.active ? 'active' : ''}`}>
                                    <img src={e.icon} className='sidebar__link-icon'/>&nbsp;&nbsp; {e.title}
                                </li>
                            </a>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

