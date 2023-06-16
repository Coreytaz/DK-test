import { StoreBlogsProvider, blogsStore } from '@/entities/Card'
import { Blogs } from '@/widgets/Blogs'
import { Pagination } from '@/widgets/Pagination/ui'
import { SelectLimit } from '@/widgets/SelectLimit'
import { Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>DK-test</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Heading
                    color="green.500"
                    as="h2"
                    textTransform="uppercase"
                    fontWeight={800}
                    fontSize="2xl"
                    letterSpacing={1.1}
                >
                    Blog List
                </Heading>
                <StoreBlogsProvider store={blogsStore}>
                    <SelectLimit />
                    <Blogs />
                    <Flex m="5" gap="5" justifyContent="center" flexWrap="wrap">
                        <Pagination />
                    </Flex>
                </StoreBlogsProvider>
            </main>
        </>
    )
}
