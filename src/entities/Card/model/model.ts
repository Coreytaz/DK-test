import { makeAutoObservable, runInAction } from 'mobx'
import { BlogsItem, FlowReturn } from './types'
import { getBlogs } from '../api'

export class BlogStore {
    blogs: BlogsItem[] = []
    status: 'init' | 'loading' | 'success' | 'error' = 'init'

    constructor() {
        makeAutoObservable(this)
    }

    async fetchBlogs() {
        this.blogs = []
        this.status = 'loading'
        try {
            const blogs = await getBlogs()
            runInAction(() => {
                this.blogs = blogs
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
