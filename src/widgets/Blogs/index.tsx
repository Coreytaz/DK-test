import { Card as CardBlog, useBlogsStore } from '@/entities/Card'
import { Flex } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SkeletonBlogs } from './SkeletonBlogs'
import { ErrorBlogs } from './ErrorBlogs'
import { autorun } from 'mobx'
import { NotFound } from './NotFound'

export const Blogs = observer(() => {
    const store = useBlogsStore()
    const router = useRouter()

    useEffect(() => {
        return autorun(() => {
            store.fetchBlogs()
            store.setTotalPage()
        })
    }, [store])

    if (store.status === 'error') {
        return <ErrorBlogs />
    }

    if (store.status === 'loading' || store.status === 'init') {
        return <SkeletonBlogs isLoading={!(store.status === 'loading')} />
    }

    return (
        <Flex mt="5" gap="5" justifyContent="center" flexWrap="wrap">
            {store.blogs?.length! > 0 ? (
                store?.blogs?.map((blog, i) => (
                    <CardBlog
                        key={blog.id}
                        onClick={() => router.push(`/blog/${blog.id}`)}
                        blog={blog}
                    />
                ))
            ) : (
                <NotFound />
            )}
        </Flex>
    )
})
