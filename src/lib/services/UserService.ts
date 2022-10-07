export class UserService {
    async fetchUsers(amountOfUsers: number): Promise<UserServiceResponse[]> {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${amountOfUsers}`)
            const data = await response.json()
            console.log(data)
            if (response.status < 200 || response.status >= 300) {
                throw new Error('Api thrown an error. Response status: ' + response.status)
            }
            return data.results as UserServiceResponse[]
        } catch (error) {
            throw new Error('Something went wrong: ' + error)
        }
    }

    async getInfoForStories(amountOfUsers: number) {
        const users = await this.fetchUsers(amountOfUsers)
        return users.map((user: UserServiceResponse) => {
            return { 
                avi: user.picture,
                username: user.login.username
            }
        })
    }

}