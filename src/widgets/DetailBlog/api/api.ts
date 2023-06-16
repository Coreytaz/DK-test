import { api } from '@/shared/api'
import { routes } from './routes'
import axios, { AxiosResponse } from 'axios'
import { ApiBlogsData, ApiUsersData } from './types'

export const getBlog = async (id: number) => {
    const posts = await api.get<any, AxiosResponse<ApiBlogsData>>(routes.getBlogData(id))
    const users = await api.get<any, AxiosResponse<ApiUsersData>>(
        routes.getUserData(posts.data.userId)
    )

    return await axios.all([posts, users]).then((response) => {
        const post = response[0].data as ApiBlogsData
        const user = response[1].data as ApiUsersData
        user.img = `https://100k-faces.glitch.me/random-image`
        const img = `https://loremflickr.com/1280/1280?random=${post.id}`

        return { ...post, img, user }
    })
}
