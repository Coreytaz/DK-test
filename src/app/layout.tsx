import { Header } from '@/widgets/Header'
import Providers from './providers'

export const metadata = {
    title: 'DK-test',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
