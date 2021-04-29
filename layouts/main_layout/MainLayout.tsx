import React from 'react'
import Head from "next/head";
import {SideNavigation} from "../../components/items/sidebar/SideNavigation";
import {TopNavigation} from "../../components/items/navbar/TopNavigation";

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
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>

                <div id="root">
                    <div className="wrapper">
                        <SideNavigation/>
                        <div id="content">
                            <TopNavigation/>
                            {this.props.children}

                        </div>
                    </div>

                </div>
            </>
        );
    }
}