import { Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PaginationItem } from './PaginationItem'
import { usePagination } from '../params'
import { useBlogsStore } from '@/entities/Card'
import { observer } from 'mobx-react-lite'

export const Pagination = observer(() => {
    const store = useBlogsStore()
    const { currentPage, handlePageChange } = usePagination()
    const lastPage = store.totalPage
    const [siblingsCount, _] = useState(3)
    const previousPages = Array.from({ length: 3 }, (_, index) => {
        if (1 <= index + currentPage - 3) {
            return index + currentPage - 3
        }
    }).filter(Number)
    const nextPages = Array.from({ length: 3 }, (_, index) => {
        if (lastPage >= index + currentPage + 1) {
            return index + currentPage + 1
        }
    }).filter(Number)

    useEffect(() => {
        store.setTotalPage()
    }, [store])

    return (
        <Stack direction="row" mt="8" justify="flex-end" align="center" spacing="6">
            <Stack direction="row" spacing="4">
                {currentPage > 1 + siblingsCount ? (
                    <>
                        <PaginationItem onPageChange={handlePageChange} page={1} />
                        {currentPage > 2 + siblingsCount ? (
                            <Text color="gray.300" w="8" textAlign="center">
                                ...
                            </Text>
                        ) : null}
                    </>
                ) : null}

                {previousPages.length > 0
                    ? previousPages.map((page) => (
                          <PaginationItem page={page!} key={page} onPageChange={handlePageChange} />
                      ))
                    : null}

                <PaginationItem onPageChange={handlePageChange} page={currentPage} isCurrent />

                {nextPages.length > 0
                    ? nextPages.map((page) => (
                          <PaginationItem onPageChange={handlePageChange} page={page!} key={page} />
                      ))
                    : null}

                {currentPage + siblingsCount < lastPage ? (
                    <>
                        {currentPage + 1 + siblingsCount < lastPage ? (
                            <Text color="gray.300" w="8" textAlign="center">
                                ...
                            </Text>
                        ) : null}
                        <PaginationItem onPageChange={handlePageChange} page={lastPage} />
                    </>
                ) : null}
            </Stack>
        </Stack>
    )
})
