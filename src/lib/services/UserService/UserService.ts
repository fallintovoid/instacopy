import { UnsplashResponse, PeopleApiResponse, UnsplashRandomPhotoResponse } from "./UserService.interface";

export class UserService {
  private amountOfUsers: number;

  private amountOfPostsForProfileForRequest: number;

  readonly unsplashApiUrl = "https://api.unsplash.com/";

  readonly randomuserApiUrl = "https://randomuser.me/api/";

  readonly clientId = "tpPYTFIEZp2r7wB5MhBnvrjHU3qhQtpu8rpXrEm9D2I";

  constructor(amountOfUsers: number, amountOfPostsForProfileForRequest: number) {
    this.amountOfUsers = amountOfUsers;
    this.amountOfPostsForProfileForRequest = amountOfPostsForProfileForRequest;
  }

  async fetchUsers(): Promise<PeopleApiResponse[]> {
    try {
      const response = await fetch(`${this.randomuserApiUrl}?results=${this.amountOfUsers}`);
      const data = await response.json();
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Api thrown an error. Response status: " + response.status);
      }
      return data.results as PeopleApiResponse[];
    } catch (error) {
      throw new Error("Something went wrong: " + error);
    }
  }

  async fetchPhotos(): Promise<UnsplashResponse[]> {
    try {
      const response = await fetch(
        `${this.unsplashApiUrl}photos?client_id=${this.clientId}&per_page=${this.amountOfUsers}`
      );
      const data = await response.json();
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Api thrown an error. Response status: " + response.status);
      }
      console.log(data);
      return data as UnsplashResponse[];
    } catch (error) {
      throw new Error("Something went wrong: " + error);
    }
  }

  async getUsersInfo(): Promise<User[]> {
    const users = await this.fetchUsers();
    const stories = await this.fetchPhotos();

    const comparedUsers: User[] = users.map((item, i) => {
      const user: User = {
        avi: item.picture.large,
        username: item.login.username,
        liked: false,
        story: stories[i].urls.regular,
        id: item.login.uuid,
      };

      return user;
    });

    return comparedUsers;
  }

  async getPosts(users: User[], page: number): Promise<Post[]> {
    const photos = await fetch(
      `${this.unsplashApiUrl}photos?client_id=${this.clientId}&per_page=${this.amountOfUsers}&page=${page}`
    );
    const dataPhotos = (await photos.json()) as UnsplashResponse[];

    const comparedPosts = users.map((item: User, i: number) => {
      const post: Post = {
        img: dataPhotos[i].urls.small,
        likes: dataPhotos[i].likes,
        avi: item.avi,
        username: item.username,
        description: dataPhotos[i].description,
        id: dataPhotos[i].id,
        liked: false,
      };

      return post;
    });
    return comparedPosts;
  }

  async getPostsForProfile(username: string, avi: string): Promise<Post[]> {
    const photos = await fetch(
      `${this.unsplashApiUrl}photos?client_id=${this.clientId}&per_page=${this.amountOfPostsForProfileForRequest}&order_by=popular`
    );
    const dataPhotos = (await photos.json()) as UnsplashResponse[];

    const posts = dataPhotos.map((item: UnsplashResponse) => {
      const post: Post = {
        avi,
        img: item.urls.small,
        username,
        likes: item.likes,
        description: item.description,
        id: item.id,
        liked: false,
      };

      return post;
    });

    return posts;
  }

  async getRandomPhoto(): Promise<string> {
    const photo = await fetch(`${this.unsplashApiUrl}photos/random?client_id=${this.clientId}`);
    const dataPhoto = (await photo.json()) as UnsplashRandomPhotoResponse;

    return dataPhoto.urls.thumb;
  }
}
