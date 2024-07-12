import { AspectRatio } from '@mantine/core';
import classes from '../styles/YouTube.module.css';

export default function YouTube({ id, aspectRatio = 16 / 9 }) {
    return (
        <AspectRatio className={classes.container} ratio={aspectRatio}>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                allow="autoplay; encrypted-media"
                title="Embedded YouTube video"
                className={classes.frame}
            />
        </AspectRatio>
    );
}