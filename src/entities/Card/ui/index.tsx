import { Box, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import { BlogsItem } from '../model/types'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    blog: BlogsItem
}

export const Card: FC<CardProps> = ({ blog, ...props }) => {
    return (
        <Box
            _active={{ transform: 'scale(0.98)' }}
            as="article"
            cursor="pointer"
            transition="all 0.2s linear"
            _hover={{ transform: 'translateY(-2px)' }}
            maxW="360px"
            w="full"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="2xl"
            rounded="md"
            p={6}
            overflow="hidden"
            {...props}
        >
            <Box bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
                <Image
                    src={`https://loremflickr.com/1280/1280?random=${blog.id}`}
                    width={1280}
                    height={1280}
                    alt=""
                />
            </Box>
            <Stack>
                <Text
                    color="green.500"
                    textTransform="uppercase"
                    fontWeight={800}
                    fontSize="sm"
                    letterSpacing={1.1}
                >
                    Blog
                </Text>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize="xl"
                    fontFamily="body"
                >
                    {blog.title}
                </Heading>
            </Stack>
            <Stack mt={6} direction="row" spacing={4} align="center">
                <Stack direction="column" spacing={0} fontSize="sm">
                    <Text color="gray.500">Author</Text>
                    <Text fontWeight={600}>{blog.user?.name}</Text>
                </Stack>
            </Stack>
        </Box>
    )
}
