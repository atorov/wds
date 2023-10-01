export type TCommentItem = {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
};

export type TPostItem = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type TPostItemX = TPostItem & {
    comments: TCommentItem[];
    user: TUserItem;
};

export type TTodoItem = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
};

export type TUserItem = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

export type TUserItemX = TUserItem & {
    posts: TPostItem[];
    todos: TTodoItem[];
};
