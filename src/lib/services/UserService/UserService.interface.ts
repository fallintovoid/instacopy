export interface PeopleApiResponse {
    cell: string;
    dob: {
        date: string;
        age: number;
    };
    email: string;
    gender: string;
    id: {
        name: string;
        value: string;
    };
    location: {
        city: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        country: string;
        postcode: number;
        state: string;
        street: {
            name: string;
            number: number;
        };
        timezone: {
            description: string;
            offset: string;
        }
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
    name: {
        title: string;
        first: string;
        last: string;
    };
    nat: string;
    phone: string;
    picture: PictureSizes;
    registered: {
        age: number;
        date: string;
    }
}

export interface UnsplashResponse {
    alt_description: string;
    blur_hash: string;
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
