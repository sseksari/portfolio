import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import fullpage.js only on client side
const FullPage = dynamic(() => import('../components/FullPage'), {
    ssr: false
})

export default function Home() {
    return (
        <div id="fullpage">
            <Head>
                <title>Shrishti Seksaria</title>
                <meta name="description" content="Personal portfolio of Shrishti Seksaria" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Sidebar />
            <FullPage />
        </div>
    );
}