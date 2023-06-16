import { DetailBlog, StoreBlogProvider, blogStore } from '@/widgets/DetailBlog'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import router from 'next/router'

export default function Page() {
    return (
        <>
            <main>
                <Button
                    variant="ghost"
                    leftIcon={<ArrowBackIcon />}
                    fontWeight={800}
                    color="green.500"
                    onClick={() => router.replace('/')}
                >
                    Back
                </Button>
                <StoreBlogProvider store={blogStore}>
                    <DetailBlog />
                </StoreBlogProvider>
            </main>
        </>
    )
}
