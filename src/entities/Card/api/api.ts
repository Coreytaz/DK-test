import { api } from '@/shared/api'
import { routes } from './routes'
import axios, { AxiosResponse } from 'axios'
import { ApiBlogsData, ApiUsersData } from './types'

export const getBlogs = async (limit: number, page: number) => {
    const posts = await api.get<any, AxiosResponse<ApiBlogsData[]>>(routes.getBlogsData(), {
        params: {
            _limit: limit,
            _page: page,
        },
    })
    const users = await api.get<any, AxiosResponse<ApiUsersData[]>>(routes.getUsersData())

    return await axios.all([posts, users]).then((response) => {
        const newPosts = response[0].data as ApiBlogsData[]
        const newUsers = response[1].data as ApiUsersData[]

        const newData = newPosts.map((post) => {
            const img = `https://loremflickr.com/1280/1280?random=${post.id}`
            const user = newUsers.find((user) => user.id === post.userId)
            return { ...post, user, img }
        })

        return newData
    })
}

export const getAllBlogsLength = async () => {
    return (await api.get<any, AxiosResponse<ApiBlogsData[]>>(routes.getBlogsData())).data.length
}
