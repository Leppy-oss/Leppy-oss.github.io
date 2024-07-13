/* eslint-disable react-hooks/exhaustive-deps */
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Image,
    Grid,
    Paper,
    Container,
    ActionIcon
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconChevronDown,
    IconSun,
    IconMoonStars
} from '@tabler/icons-react';
import classes from '../styles/header.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header({ colorScheme, setColorScheme }) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const currPath = usePathname();

    const featuredProjects = [
        { displayName: 'CenterStage Simulator', repo: 'centerstagesimulator' },
        { displayName: 'Powerplay AI Agent', repo: 'powerplay-ai' },
        { displayName: 'Redux Game Engine', repo: 'redux' },
        { displayName: 'Spline-Based Path-Planning Software', repo: 'oiroirbeebee' },
        { displayName: 'Wake Steering Model', repo: 'wake-steering' },
    ];

    const [featuredProjectDescriptions, setFeaturedProjectDescriptions] = useState(null);

    useEffect(() => {
        const fetchDescriptions = async () => {
            try {
                const descriptions = await Promise.all(featuredProjects.map(async project => {
                    try {
                        const response = await fetch(`https://api.github.com/repos/Leppy-oss/${project.repo}`);
                        const res = await response.json();
                        return [project.repo, res.description || 'Error loading description'];
                    } catch (e) {
                        console.log(`Error fetching repository ${project.repo}: ${e}`);
                        return [project.repo, 'Error loading description'];
                    }
                }));
                setFeaturedProjectDescriptions(Object.fromEntries(descriptions));
            } catch (e) { console.log(`Error fetching repositories: ${e}`); }
        };

        fetchDescriptions();
    }, []);

    return (
        <Box pb={120}>
            <header className={classes.header}>
                <Group justify='space-between' h='100%'>
                    <Group align='center'>
                        <Image mah='4rem' src='/logo.svg' alt='leppy-oss logo' />
                        <Anchor
                            fw={900}
                            variant='gradient'
                            gradient={{ from: 'blue', to: 'pink', deg: 90 }}
                            styles={{ root: { fontSize: '2rem' } }}
                            underline='never'
                            type='a'
                            href='/'
                        >Leppy-oss Portfolio</Anchor>
                    </Group>

                    <Group h='100%' gap={0} visibleFrom='sm' wrap='nowrap'>
                        <Link href='/' className={classes.link}>Home</Link>
                        <HoverCard width={600} position='bottom' radius='md' shadow='md' withinPortal>
                            <HoverCard.Target>
                                <Link href='/projects' className={classes.link}>
                                    <Center inline>
                                        <Box component='span' mr={5}>
                                            Projects
                                        </Box>
                                        <IconChevronDown
                                            style={{ width: rem(16), height: rem(16) }}
                                            color={theme.colors.blue[6]}
                                        />
                                    </Center>
                                </Link>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <Group justify='space-between' px='md'>
                                    <Text fw={500}>Projects</Text>
                                    <Anchor href='/projects' fz='xs'>
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider my='sm' />

                                <Container fluid className={classes.dropdownFooter}>
                                    <Container>
                                        <Text fw={500} fz='md'>
                                            Featured
                                        </Text>
                                        <Grid>
                                            {featuredProjects.map(proj =>
                                                <Grid.Col span={4} key={proj.repo}>
                                                    <Paper radius='lg' shadow p='1em'>
                                                        <Anchor underline='never' variant='gradient' gradient={{ from: 'blue', to: 'cyan' }} type='a' href={proj.repo}>
                                                            {proj.displayName}
                                                        </Anchor>
                                                        {featuredProjectDescriptions &&
                                                            <Text>{featuredProjectDescriptions[proj.repo]}</Text>
                                                        }
                                                    </Paper>
                                                </Grid.Col>
                                            )
                                            }
                                        </Grid>
                                    </Container>
                                    <Container>
                                        <Group>
                                            <Container>
                                                <Text fw={500} fz='md'>
                                                    Browse random
                                                </Text>
                                                <Text size='xs' c='dimmed'>
                                                    Browse a random one of my projects!
                                                </Text>
                                            </Container>
                                            <Button variant='default'>Get started</Button>
                                        </Group>
                                    </Container>
                                </Container>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <Link href='/blog' className={classes.link}>Blog</Link>
                        <Link href='/about' className={classes.link}>About</Link>
                    </Group>

                    <Group>
                        <ActionIcon variant='outline' color={colorScheme == 'dark' && 'orange'} onClick={() => {
                            setColorScheme(colorScheme == 'dark' ? 'light' : 'dark')
                        }}>
                            {colorScheme == 'dark' ? <IconSun /> : <IconMoonStars />}
                        </ActionIcon>
                        <Container visibleFrom='md' p={0} m={0}>
                            <Link href='/contact'><Button variant='gradient' gradient={{ from: 'pink', to: 'orange' }}>Contact</Button></Link>
                        </Container>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom='sm' />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size='100%'
                padding='md'
                title='Leppy-oss Portfolio'
                hiddenFrom='sm'
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
                    <Divider my='sm' />

                    <Link href='/' className={classes.link}>Home</Link>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component='span' mr={5}>
                                Projects
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{ }</Collapse>
                    <a href='#' className={classes.link}>
                        Learn
                    </a>
                    <a href='#' className={classes.link}>
                        Academy
                    </a>

                    <Divider my='sm' />

                    <Group justify='center' grow pb='xl' px='md'>
                        <Button variant='default'>Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}