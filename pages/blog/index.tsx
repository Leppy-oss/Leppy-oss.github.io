import React from 'react';
import { useMemo, useState } from 'react';

import type { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { ActionIcon, Container, Grid, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';

import { IconSearch, IconBrandX } from '@tabler/icons-react';

import ArticleCard from '../../components/ArticleCard';

import { PostMeta, getAllPosts } from '../../lib/blog';

export default function Blog({ posts }: { posts: PostMeta[] }) {
    const [value, setValue] = useState('');
    const [debounced] = useDebouncedValue(value, 200, { leading: true });

    /* Filtering the posts based on the search input. */
    const filtered = useMemo(() => {
        if (debounced)
            return posts.filter(
                (post) =>
                    post.title
                        .toLocaleLowerCase()
                        .includes(debounced.toLocaleLowerCase()) ||
                    post.category
                        .toLocaleLowerCase()
                        .includes(debounced.toLocaleLowerCase())
            );

        return posts;
    }, [debounced, posts]);

    const clearFilter = () => {
        setValue('');
    };

    return (
        <Container>
            <NextSeo title='Blog Posts' description='List of blog posts' />
            <Grid align='stretch'>
                <Grid.Col> {/*sm={12}*/}
                    <TextInput
                        placeholder='Search...'
                        value={value}
                        leftSection={< IconSearch size={14} />}
                        rightSection={
                            debounced && (
                                <ActionIcon onClick={clearFilter}>
                                    <IconBrandX size={14} />
                                </ActionIcon>
                            )
                        }
                        style={{ flex: 1 }}
                        onChange={(event) => setValue(event.currentTarget.value)}
                    />
                </Grid.Col>
                {filtered.map((post) => (
                    <Grid.Col key={post.slug}>
                        <ArticleCard
                            link={`/posts/${post.slug}`}
                            title={post.title}
                            description={post.excerpt}
                            author={post.author}
                            image={post.image}
                            category={post.category}
                        />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts().map((post) => post.meta);

    return {
        props: {
            posts,
        },
    };
};