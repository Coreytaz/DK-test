import { useBlogsStore } from '@/entities/Card'
import { useSearchParam } from '@/shared/hook/useQueryParam'
import { autorun } from 'mobx'
import { useEffect, useState } from 'react'

export const usePagination = () => {
    const store = useBlogsStore()
    const { searchParam, setSearchParam } = useSearchParam('page')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setCurrentPage(+searchParam! || 1)
        autorun(() => {
            store.setPage(+searchParam! || 1)
        })
    }, [searchParam, store])

    const handlePageChange = (pageNumber: number) => {
        setSearchParam(pageNumber.toString())
        setCurrentPage(pageNumber)
        autorun(() => {
            store.fetchBlogs()
        })
    }

    return { currentPage, handlePageChange }
}
