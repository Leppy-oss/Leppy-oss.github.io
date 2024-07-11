import { Text } from '@mantine/core';

export default function GradientText({ children, from, to, neon=false, ...props }) {
    const extraStyles = neon? {
        textShadow: `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
        0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa`
    } : {};
    return <Text {...props} style={{
        background: `linear-gradient(45deg, ${from}, ${to}) 0 0 / 100% 100%`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        width: 'fit-content',
        ...extraStyles
    }}>{children}</Text>;
}