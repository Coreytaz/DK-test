import { Header } from '@/widgets/Header'
import { ChakraProvider, Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Header />
            <Container maxW="6xl" pt="5">
                <Component {...pageProps} />
            </Container>
        </ChakraProvider>
    )
}
