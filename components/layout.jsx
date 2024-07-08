import { Box } from '@mantine/core';
// import Navbar from './navbar.component';
import Head from 'next/head'
import { usePathname } from 'next/navigation';
// import Footer from './footer';

export default function Layout({ children }) {
    const rawPathname = usePathname().slice(1);
    const pathname = rawPathname.charAt(0).toUpperCase().concat(rawPathname.slice(1));
    return (
        <div className='app'>
            <Head>
                <link rel='icon' href='/GearLogoNoBG.svg' />
                <meta name='theme-color' content='#000000' />
                <meta name='description' content='Personal website and portfolio for Leppy-oss!' />
                <title>{`${pathname || 'Home'} | Leppy-oss-Portfolio`}</title>
            </Head>
            <main>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                {/* <Navbar /> */}
                <Box ml='1rem' mr='1rem'>
                    {children}
                </Box>
                {/* <Footer /> */}
            </main>
        </div>
    )
}