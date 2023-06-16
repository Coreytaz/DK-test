import { Flex, Skeleton } from '@chakra-ui/react'
import { FC } from 'react'

export const SkeletonBlogs: FC = () => {
    return (
        <Flex mt="5" gap="5" justifyContent="center" flexWrap="wrap">
            {[...new Array(6)].map((_, i) => (
                <Skeleton rounded="md" key={i} h={575} w={360} />
            ))}
        </Flex>
    )
}
