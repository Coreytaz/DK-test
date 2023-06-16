import { useBlogsStore } from '@/entities/Card'
import { useSearchParam } from '@/shared/hook/useQueryParam'
import { autorun } from 'mobx'
import { useEffect, useState } from 'react'

export const useLimit = () => {
    const store = useBlogsStore()
    const { searchParam, setSearchParam } = useSearchParam('limit')
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        const value = +searchParam! || 10
        setLimit(value)
        autorun(() => {
            store.setLimit(value)
        })
    }, [searchParam, store])

    const handleLimitChange = (limit: number) => {
        setSearchParam(limit.toString())
        setLimit(limit)
        autorun(() => {
            store.setTotalPage()
            store.fetchBlogs()
            store.setPage(1)
        })
    }

    return { limit, handleLimitChange }
}
