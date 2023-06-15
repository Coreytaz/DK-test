import { Card as CardBlog, blogStore } from '@/entities/Card'
import { Box, Button, Flex, Heading, Skeleton, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const Blogs = observer(() => {
    const router = useRouter()

    useEffect(() => {
        blogStore.fetchBlogs()
    }, [])

    if (blogStore.status === 'error') {
        return (
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text"
                >
                    500
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Internal Server Error
                </Text>
                <Text color={'gray.500'} mb={6}>
                    The page you are looking for does not seem to be found on the server
                </Text>

                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid"
                    onClick={() => blogStore.fetchBlogs()}
                >
                    Refresh
                </Button>
            </Box>
        )
    }
    if (blogStore.status === 'loading') {
        return (
            <Flex mt="5" gap="5" justifyContent="center" flexWrap="wrap">
                {[...new Array(6)].map((_, i) => (
                    <Skeleton rounded="md" key={i} h={575} w={360} />
                ))}
            </Flex>
        )
    }

    return (
        <Flex mt="5" gap="5" justifyContent="center" flexWrap="wrap">
            {blogStore.blogs.map((blog, i) => (
                <CardBlog
                    key={blog.id}
                    onClick={() => router.push(`/blog/${blog.id}`)}
                    blog={blog}
                />
            ))}
        </Flex>
    )
})
