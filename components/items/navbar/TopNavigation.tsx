import {useState} from "react";
import {Navbar, Container} from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image';


export const TopNavigation = () => {
    return (

        <Navbar bg="dark" expand={'lg'}>
            <Container fluid>
                <Link href={'/'}>
                    <a className={'navbar-brand'}>
                        <Image width={30} height={30} src={'/vercel.svg'}/>
                    </a>
                </Link>
            </Container>
        </Navbar>
    )
}