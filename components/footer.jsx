import { Container, Group, ActionIcon, rem, Image, Text, Anchor, Button } from '@mantine/core';
import { IconBrandX, IconBrandYoutube, IconBrandInstagram, IconArrowNarrowUp } from '@tabler/icons-react';
import classes from '../styles/footer.module.css';
import { useGSAP } from '@gsap/react';
import { scrollTo } from '../lib/gsap-provider';

export default function Footer() {
    useGSAP(() => {
        scrollTo(0.8, 800);
    });
    return (
        <div className={classes.footer}>
            <Container fluid className={classes.inner}>
                <Group className={classes.links} align='center' justify='space-between'>
                    <Group align='center' justify='center'>
                        <Image mah={rem(50)} src='/logo.svg' alt='8556 Logo' />
                        <Button
                            size='compact'
                            onClick={() => {
                            }}
                            /*
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                            */
                            styles={{
                                label: {
                                    backgroundColor: 'transparent'
                                },
                            }}
                            rightSection={<IconArrowNarrowUp />}
                        >Back to top
                        </Button>
                    </Group>
                    <Group gap={0}>
                        <ActionIcon size='lg' color='gray' variant='subtle' stroke={1.5} component='a' target='_blank' href='https://x.com/technicbots' >
                            <IconBrandX style={{ width: rem(18), height: rem(18) }} />
                        </ActionIcon>
                        <ActionIcon size='lg' color='gray' variant='subtle' stroke={1.5} component='a' target='_blank' href='https://www.youtube.com/@technicbots8565' >
                            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} />
                        </ActionIcon>
                        <ActionIcon size='lg' color='gray' variant='subtle' component='a' target='_blank' href='https://www.instagram.com/technicbots/'>
                            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                    <Text c="dimmed" size="sm">
                        © 2024 Leppy-oss. All rights reserved.
                    </Text>
                </Group>
            </Container>
        </div>
    );
}