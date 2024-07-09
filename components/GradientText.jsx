export default function GradientText({ children, from, to, ...props }) {
    return <p {...props} style={{
        background: `linear-gradient(to right, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        maxWidth: 'fit-content'
    }}>{children}</p>
}