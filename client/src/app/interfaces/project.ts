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
    createdAt: string;
    updatedAt: string;
    posts: Post[];
}
