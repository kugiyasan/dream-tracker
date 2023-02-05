import { Post, Project } from '@app/types';
import { Service } from 'typedi';

@Service()
export class ProjectService {
    projects: Project[];
    constructor() {
        this.projects = [];
        this.populateDb();
    }

    populateDb(): void {
        const post: Post = {
            title: 'Post 1',
            body: 'Post 1 content',
            author: 'Jean-Claude',
            createdAt: new Date().toString(),
        };
        const project: Project = {
            id: '1',
            name: 'Project 1',
            description: 'Project 1 description',
            author: 'Jean-Claude',
            thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            createdAt: new Date().toString(),
            posts: [post, post, post],
        };

        for (let i = 0; i < 10; i++) {
            this.projects.push(project);
        }
    }

    getAllProjects(): Project[] {
        return this.projects;
    }

    addProject(project: Project): Project {
        this.projects.push(project);
        return project;
    }

    addPost(id: string, post: Post): Project {
        const index = this.projects.findIndex((p) => p.id === id);
        const project = this.projects[index];
        project.posts.push(post);
        return project;
    }
}
