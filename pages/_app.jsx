import Layout from "../components/layout";
import { MantineProvider } from '@mantine/core'

import '../styles/global.css';
import '@mantine/core/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import GsapProvider from "../lib/gsap-provider";
import { useToggle } from "@mantine/hooks";

function MyApp({ Component, pageProps }) {
    const [darkMode, toggleDarkMode] = useToggle([false, true]);

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false
        });
    }, []);

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS defaultColorScheme='light'>
            <GsapProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </GsapProvider>
        </MantineProvider>
    );
}

export default MyApp;