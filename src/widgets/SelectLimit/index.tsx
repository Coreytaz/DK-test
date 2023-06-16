import { Select } from '@chakra-ui/react'
import { FC } from 'react'
import { useLimit } from './params'
import { observer } from 'mobx-react-lite'

export const SelectLimit: FC = () => {
    const { limit, handleLimitChange } = useLimit()
    return (
        <Select
            mt="5"
            value={limit}
            w={{ base: '100%', md: 'sm' }}
            onChange={(e) => handleLimitChange(+e.target.value)}
        >
            <option value="5">Take 5</option>
            <option value="10">Take 10</option>
            <option value="20">Take 20</option>
        </Select>
    )
}
