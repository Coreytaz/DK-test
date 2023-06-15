import { Card as CardBlog, blogStore } from '@/entities/Card'
import { Flex } from '@chakra-ui/react'
import { flowResult } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const Blogs = observer(() => {
    const router = useRouter()

    useEffect(() => {
        blogStore.fetchBlogs()
    }, [])

    console.log(blogStore.blogs)

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
