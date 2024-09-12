import Header from '@/features/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {Provider} from 'react'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
        {/* <Provider store={}> */}
            {/* <Header /> */}
            <Component {...pageProps} />
            
            {/* </Provider> */}
        </>
    );
}
