import { UnsplashResponse, PeopleApiResponse } from "./UserService.interface"

export class UserService {

    private amountOfUsers: number

    constructor(amountOfUsers: number) {
        this.amountOfUsers = amountOfUsers
    }

    async fetchUsers(): Promise<PeopleApiResponse[]> {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${this.amountOfUsers}`)
            const data = await response.json()
            if (response.status < 200 || response.status >= 300) {
                throw new Error('Api thrown an error. Response status: ' + response.status)
            }
            return data.results as PeopleApiResponse[]
        } catch (error) {
            throw new Error('Something went wrong: ' + error)
        }
    }

    async getInfoForStories(): Promise<User[]> {
        const users = await this.fetchUsers()
        return users.map((user: PeopleApiResponse) => {
            return { 
                avi: user.picture,
                username: user.login.username
            } as User
        })
    }
    async getPosts(users: User[]): Promise<Post[]> {
        const photos = await fetch(`https://api.unsplash.com/photos?client_id=tpPYTFIEZp2r7wB5MhBnvrjHU3qhQtpu8rpXrEm9D2I&per_page=${this.amountOfUsers}`)
        const dataPhotos = await photos.json() as UnsplashResponse[]

        const comparedPosts = users.map((item: User, i: number) => {
            const post: Post = {
                img: dataPhotos[i].urls.regular,
                likes: dataPhotos[i].likes,
                avi: item.avi.medium,
                username: item.username,
                description: dataPhotos[i].description,
                id: dataPhotos[i].id,
                liked: false
            }

            return post
        })
        return comparedPosts
    }

    async getPostsForProfile(username: string, avi: string): Promise<Post[]> {
        const photos = await fetch(`https://api.unsplash.com/photos?client_id=tpPYTFIEZp2r7wB5MhBnvrjHU3qhQtpu8rpXrEm9D2I&per_page=${this.amountOfUsers}&order_by=popular`)
        const dataPhotos = await photos.json() as UnsplashResponse[]

        const posts = dataPhotos.map((item: UnsplashResponse) => {
            const post: Post = {
                avi,
                img: item.urls.full,
                username,
                likes: item.likes,
                description: item.description,
                id: item.id,
                liked: false
            }

            return post
        })

        return posts
    }

}