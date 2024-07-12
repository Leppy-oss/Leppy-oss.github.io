import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import classes from '../styles/404.module.css';
import Link from 'next/link';

export default function ErrorPage() {
    return (
        <Container className={classes.root}>
            <SimpleGrid spacing={{ base: 20, sm: 40 }} cols={{ base: 1, sm: 2 }}>
                <Image src='/404.jpg' className={classes.mobileImage} alt='' />
                <div>
                    <Title className={classes.title}>Something Went Wrong</Title>
                    <Text c='dimmed' size='lg'>
                        This page does not exist yet.
                        It may have been moved to another URL, or you may have mistyped the address. It may even still be a WIP!
                        If you feel this is an error, please contact me.
                    </Text>
                    <Link href='/'>
                        <Button variant='outline' size='md' mt='xl' className={classes.control}>
                            Back to home page
                        </Button>
                    </Link>
                </div>
                <Image src='/404.jpg' className={classes.desktopImage} alt='' />
            </SimpleGrid>
        </Container>
    );
}