import { makeAutoObservable, runInAction } from 'mobx'
import { BlogItem } from './types'
import { getBlog } from '../api'

export class BlogStore {
    blog: BlogItem | null = null
    status: 'init' | 'loading' | 'success' | 'error' = 'init'

    constructor() {
        makeAutoObservable(this)
    }

    fetchClear = () => {
        this.blog = null
        this.status = 'init'
    }

    fetchBlog = async (id: number) => {
        this.blog
        this.status = 'loading'
        try {
            const blogs = await getBlog(id)
            runInAction(() => {
                this.blog = blogs
                this.status = 'success'
            })
        } catch (e) {
            runInAction(() => {
                this.status = 'error'
            })
        }
    }
}

export const blogStore = new BlogStore()
