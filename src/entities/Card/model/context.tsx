import { createContext, useContext } from 'react'
import type { BlogStore } from './model'

const StoreContext = createContext<BlogStore | null>(null)

interface StoreProviderProps {
    store: BlogStore
    children: React.ReactNode
}

export function StoreBlogsProvider(props: StoreProviderProps) {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}

export function useBlogsStore(): BlogStore
export function useBlogsStore<Result>(selector: (value: BlogStore) => Result): Result
export function useBlogsStore<Result>(selector?: (value: BlogStore) => Result) {
    const store = useContext(StoreContext)

    if (!store) {
        throw new Error('Can not `useBlogsStore` outside of the `StoreProvider`')
    }

    if (typeof selector === 'function') {
        return selector(store)
    }

    return store
}
