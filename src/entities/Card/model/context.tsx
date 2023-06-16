import { createContext, useContext } from 'react'
import type { BlogsStore } from './model'

const StoreContext = createContext<BlogsStore | null>(null)

interface StoreProviderProps {
    store: BlogsStore
    children: React.ReactNode
}

export function StoreBlogsProvider(props: StoreProviderProps) {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}

export function useBlogsStore(): BlogsStore
export function useBlogsStore<Result>(selector: (value: BlogsStore) => Result): Result
export function useBlogsStore<Result>(selector?: (value: BlogsStore) => Result) {
    const store = useContext(StoreContext)

    if (!store) {
        throw new Error('Can not `useBlogsStore` outside of the `StoreProvider`')
    }

    if (typeof selector === 'function') {
        return selector(store)
    }

    return store
}
