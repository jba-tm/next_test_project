import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import '../styles/app.css'


import type {AppProps /*, AppContext */} from 'next/app'

export default function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}