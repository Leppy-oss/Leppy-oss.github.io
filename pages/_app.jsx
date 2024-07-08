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

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false
        });
    }, []);
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MantineProvider>
    );
}

export default MyApp;