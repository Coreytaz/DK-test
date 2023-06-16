import { makeAutoObservable, runInAction } from 'mobx'
import { BlogsItem, FlowReturn } from './types'
import { getAllBlogsLength, getBlogs } from '../api'

export class BlogsStore {
    page: number = 1
    limit: number = 10
    totalPage: number = 0
    blogs: BlogsItem[] | null = null
    status: 'init' | 'loading' | 'success' | 'error' = 'init'

    constructor() {
        makeAutoObservable(this)
    }

    setPage = (page: number) => {
        this.page = page
    }
    setLimit = (limit: number) => {
        this.limit = limit
    }

    setTotalPage = async () => {
        try {
            const length = await getAllBlogsLength()
            runInAction(() => {
                this.totalPage = Math.ceil(length / this.limit)
            })
        } catch (error) {}
    }

    fetchBlogs = async (limit: number = this.limit, page: number = this.page) => {
        this.status = 'loading'
        this.blogs = null
        try {
            const blogs = await getBlogs(limit, page)
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

export const blogsStore = new BlogsStore()
