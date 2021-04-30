import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import '../styles/globals.css'
import '../styles/app.css'
import '../styles/css/icons.css'


import type {AppProps /*, AppContext */} from 'next/app'

export default function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}