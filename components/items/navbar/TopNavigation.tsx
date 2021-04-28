import {useState} from "react";
import {Navbar, Container, Button} from 'react-bootstrap'
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
        <Navbar expand={'lg'}>
            <Container fluid>
                <button id='sidebarCollapse' onClick={handleClick} className={`navbar-btn ${toggleSide?'':'active'}`}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <Link href={'/'}>
                    <a className={'navbar-brand'}>
                        <Image width={30} height={30} src={'/vercel.svg'}/>
                    </a>
                </Link>
            </Container>
        </Navbar>
    )
}