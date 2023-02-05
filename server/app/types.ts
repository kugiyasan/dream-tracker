export interface Message {
    title: string;
    body: string;
}

export interface Post {
    title: string;
    body: string;
    author: string;
    createdAt: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    author: string;
    thumbnail: string;
    createdAt: string;
    posts: Post[];
}
