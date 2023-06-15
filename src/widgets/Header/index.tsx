'use client'

import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Text,
    Container,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box bg={useColorModeValue('gray.200', 'gray.700')} px={4}>
                <Container maxW="6xl">
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                            >
                                DK-test
                            </Text>
                        </Box>

                        <Flex alignItems={'center'}>
                            <Stack direction={'row'} spacing={7}>
                                <Button onClick={toggleColorMode}>
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>
                            </Stack>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}
