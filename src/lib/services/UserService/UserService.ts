import { UnsplashResponse, UserServiceResponse } from "./UserService.interface"

export class UserService {

    private amountOfUsers: number

    constructor(amountOfUsers: number) {
        this.amountOfUsers = amountOfUsers
    }

    async fetchUsers(): Promise<UserServiceResponse[]> {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${this.amountOfUsers}`)
            const data = await response.json()
            if (response.status < 200 || response.status >= 300) {
                throw new Error('Api thrown an error. Response status: ' + response.status)
            }
            return data.results as UserServiceResponse[]
        } catch (error) {
            throw new Error('Something went wrong: ' + error)
        }
    }

    async getInfoForStories(): Promise<User[]> {
        const users = await this.fetchUsers()
        return users.map((user: UserServiceResponse) => {
            return { 
                avi: user.picture,
                username: user.login.username
            } as User
        })
    }
    async getPosts(users: User[]): Promise<Post[]> {
        const photos = await fetch(`https://api.unsplash.com/photos?client_id=tpPYTFIEZp2r7wB5MhBnvrjHU3qhQtpu8rpXrEm9D2I`)
        const dataPhotos = await photos.json() as UnsplashResponse[]
        const comparedPosts = users.map((item: User, i: number) => {
            const post = {
                img: dataPhotos[i].urls.regular,
                likes: dataPhotos[i].likes
            }
            const user = {
                avi: item.avi.medium,
                username: item.username
            }
            return {...post, ...user}
        })
        return comparedPosts
    }

}