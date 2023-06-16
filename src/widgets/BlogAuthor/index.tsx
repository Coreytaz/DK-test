import { HStack, SkeletonCircle, Tag, Image, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { useBlogStore } from '../DetailBlog'

export const BlogAuthor: FC = observer(() => {
    const store = useBlogStore()
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src={store.blog?.user?.img}
                alt={`Avatar of ${store.blog?.user?.name}`}
                fallback={<SkeletonCircle size="10" />}
            />
            <Text fontWeight="medium">{store.blog?.user?.name}</Text>
            <Text>—</Text>
            <Tag size={'md'} variant="solid" colorScheme="green">
                <Text fontWeight="medium">{store.blog?.user?.username}</Text>
            </Tag>
        </HStack>
    )
})
