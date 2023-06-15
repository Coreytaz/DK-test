import { Heading, Box, useColorModeValue, Image, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Page() {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Heading
                    color="green.500"
                    as="h2"
                    textTransform="uppercase"
                    fontWeight={800}
                    letterSpacing={1.1}
                >
                    Stories by Chakra Templates
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
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                        </Text>
                    </Box>
                </Box>
            </main>
        </>
    )
}
