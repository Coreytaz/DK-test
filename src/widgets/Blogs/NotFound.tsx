import { Box, Heading, Button, Text } from '@chakra-ui/react'
import router from 'next/router'
import React from 'react'

export const NotFound = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                lineHeight="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text"
            >
                Page Not Found
            </Heading>
            <Text color={'gray.500'} mb={6}>
                The page you are looking for does not seem to exist
            </Text>

            <Button
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                variant="solid"
                onClick={() => router.replace('/')}
            >
                Back
            </Button>
        </Box>
    )
}
