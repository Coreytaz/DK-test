import { Heading, Box, useColorModeValue, Text, BoxProps, Skeleton, Image } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'
import { useBlogStore } from '../model'
import { useRouter } from 'next/router'
import { BlogAuthor } from '@/widgets/BlogAuthor'
import { SkeletonDetailBlog } from './SkeletonDetailBlog'
import { ErrorDetailBlog } from './ErrorDetailBlog'
import Head from 'next/head'

interface DetailBlogProps extends BoxProps {}

export const DetailBlog: FC<DetailBlogProps> = observer(({ ...props }) => {
    const router = useRouter()
    const store = useBlogStore()

    useEffect(() => {
        if (router.query.id) {
            store.fetchBlog(Number(router.query.id))
        }
        return () => {
            store.fetchClear()
        }
    }, [router.query.id, store])

    if (store.status === 'error') {
        return <ErrorDetailBlog />
    }

    if (store.status === 'loading' || store.status === 'init') {
        return <SkeletonDetailBlog />
    }

    return (
        <>
            <Head>
                <title>{store.blog?.title}</title>
            </Head>
            <Box {...props}>
                <Heading
                    mt="5"
                    color="green.500"
                    as="h2"
                    size={{ base: 'md', sm: 'lg' }}
                    textTransform="uppercase"
                    fontWeight={800}
                    letterSpacing={1.1}
                >
                    {store.blog?.title}
                </Heading>
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center"
                    >
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%"
                        >
                            <Image
                                borderRadius="lg"
                                src={store.blog?.img}
                                alt=""
                                fallback={
                                    <Skeleton
                                        width={{ base: '100%' }}
                                        height={{ base: 260, md: 460 }}
                                    />
                                }
                            />
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}
                    >
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg"
                        >
                            {store.blog?.body}
                        </Text>
                        <BlogAuthor />
                    </Box>
                </Box>
            </Box>
        </>
    )
})
