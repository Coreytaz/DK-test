import { Box, SkeletonText, Skeleton } from '@chakra-ui/react'
import { FC } from 'react'

export const SkeletonDetailBlog: FC = () => {
    return (
        <Box>
            <SkeletonText mt="5" />
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
                        <Skeleton width={460} height={460} />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <SkeletonText />
                </Box>
            </Box>
        </Box>
    )
}
