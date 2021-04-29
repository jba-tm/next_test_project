import {createRef} from "react";
import Link from "next/link";
import Image from "next/image";

export const sidebarRef = createRef<any>()

export const SideNavigation = () => {
    return (
        <nav id="sidebar" className={'sidebar'} ref={sidebarRef}>
            <div className="sidebar__header">
                <div className={'sidebar__header-logo'}>Logo</div>

                <div className=" d-flex align-items-center justify-content-start sidebar__profile">
                    <Image src={'/assets/images/img.png'} width={30} height={30}
                           className={'rounded-circle sidebar__profile-img'}/>
                    <div className="pl-2 sidebar__profile-content">
                        <div className={'sidebar__profile-title'}>
                            Title title
                        </div>
                        <div className='sidebar__profile-body'>
                            Body
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__body">
                <ul className="list-unstyled components">
                    <li className="sidebar_body-list active">
                        <Link href={'/'}>
                            <a className='sidebar__body-link'>
                                <img src="/assets/icons/yonetim.svg" className='sidebar__link-icon'/>&nbsp;&nbsp; Title
                            </a>

                        </Link>
                    </li>
                    <li className='sidebar_body-list'>
                        <Link href={'/'}>
                            <a className='sidebar__body-link'>
                                <img src="/assets/icons/truck.svg" className='sidebar__link-icon'/>&nbsp;&nbsp; Title
                            </a>
                        </Link>
                    </li>
                    <li className='sidebar_body-list'>
                        <Link href={'/'}>
                            <a className='sidebar__body-link'>
                                <img src="/assets/icons/logout.svg" className='sidebar__link-icon'/>&nbsp;&nbsp; Logout
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

