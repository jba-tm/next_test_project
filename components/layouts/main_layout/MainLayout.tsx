import React from 'react'
import Head from "next/head";
import {Sidebar} from "../../items/sidebar/Sidebar";
import {Navbar} from "../../items/navbar/Navbar";

type Props = {
    title: string,
}

export class MainLayout extends React.Component<Props> {
    static defaultProps = {
        title: 'Title'
    }

    render() {
        return (
            <>
                <Head>
                    <title>{this.props.title}</title>

                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                    <div id="root">
                        <Navbar/>
                        <div className="container-fluid">
                            <div className="row">
                                <Sidebar/>
                                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                                </main>
                            </div>
                        </div>
                        {this.props.children}
                    </div>
                </Head>
            </>
        );
    }
}

