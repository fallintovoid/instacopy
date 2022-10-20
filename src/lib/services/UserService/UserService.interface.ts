export interface PeopleApiResponse {
    id: {
        name: string;
        value: string;
    };
    login: {
        md5: string;
        password: string;
        salt: string;
        sha1: string;
        sha256: string;
        username: string;
        uuid: string;
    };
    picture: PictureSizes;
}

export interface UnsplashResponse {
    alt_description: string;
    color: string;
    description: string;
    likes: number;
    id: string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    }
}

export interface UnsplashRandomPhotoResponse {
    urls: {
        full: string
    }
}
