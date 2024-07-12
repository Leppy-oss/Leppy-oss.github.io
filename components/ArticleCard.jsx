import {
    Card,
    Image,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
    useMantineTheme,
    rem,
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from '../styles/ArticleCard.module.css';
import { useRouter } from 'next/navigation';

export default function ArticleCard({ link, title, description, author, image, category, date = null, tags = [] }) {
    const theme = useMantineTheme();
    const router = useRouter();

    return (
        <Card withBorder radius='md' className={classes.card} onClick={() => router.push(`/blog/${link}`)}>
            <Card.Section mb='sm'>
                <Badge top='1rem' right='1rem' pos='absolute' w='fit-content' variant='gradient' gradient={{ from: 'pink', to: 'orange' }}>{category}</Badge>
                <Image
                    src={image}
                    alt={title}
                    height={180}
                    fit='cover'
                />
            </Card.Section>

            <Group gap={5}>
                {tags.map(tag => <Badge w='fit-content' variant='light' key={tag}>
                    {tag}
                </Badge>)}
            </Group>

            <Text fw={700} className={classes.title} mt='xs'>{title}</Text>
            <Text fw={200} mt='xs' size='sm'>{description}</Text>

            <Group mt='lg'>
                <Avatar
                    src={author.image}
                    radius='xl'
                />
                <div>
                    <Text fw={500}>{author.name}</Text>
                    <Text fz='xs' c='dimmed'>
                        {date && `posted ${date}`}
                    </Text>
                </div>
            </Group>
        </Card>
    );
}