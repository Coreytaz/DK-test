/* eslint-disable react-hooks/rules-of-hooks */
import { Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface PaginationItemProps {
    isCurrent?: boolean
    page: number
    onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, page, onPageChange }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                color={useColorModeValue('white', 'white')}
                width="4"
                bg="green.500"
                boxShadow="2xl"
                _hover={{ bg: 'green.500' }}
                disabled
                cursor="default"
            >
                {page}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            bg={useColorModeValue('gray.200', 'gray.600')}
            fontSize="xs"
            width="4"
            _hover={{
                bg: useColorModeValue('gray.300', 'gray.700'),
            }}
            onClick={() => onPageChange(page)}
        >
            {page}
        </Button>
    )
}
