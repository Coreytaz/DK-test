import { useRouter } from 'next/router'

export const useSearchParam = (paramName: string) => {
    const router = useRouter()

    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1])
    const paramValue = searchParams.get(paramName)

    const setSearchParam = (value: string) => {
        searchParams.set(paramName, value)
        const queryString = searchParams.toString()
        router.push(`${router.pathname}?${queryString}`, undefined, { shallow: true })
    }

    return {
        searchParam: paramValue,
        setSearchParam,
    }
}
