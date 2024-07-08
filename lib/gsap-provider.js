import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

export default function GsapProvider({ children }) {
    return children;
}

export function scrollTo(duration, scrollTo) {
    gsap.to(window, { duration, scrollTo, ease: 'power2' });
}