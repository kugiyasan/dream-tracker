import { Post, Project } from '@app/types';
import { readFileSync, writeFileSync } from 'fs';
import { Service } from 'typedi';

@Service()
export class ProjectService {
    private readonly filename = 'projects.json';
    projects: Project[];

    constructor() {
        try {
            const f = readFileSync(this.filename);
            this.projects = JSON.parse(f.toString());
        } catch {
            this.projects = [];
            this.populateDb();
            this.writeFile();
        }
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

    writeFile(): void {
        writeFileSync(this.filename, JSON.stringify(this.projects));
    }

    getAllProjects(): Project[] {
        return this.projects;
    }

    addProject(project: Project): Project {
        this.projects.push(project);
        this.writeFile();
        return project;
    }

    addPost(id: string, post: Post): Project {
        const index = this.projects.findIndex((p) => p.id === id);
        const project = this.projects[index];
        project.posts.push(post);
        this.writeFile();
        return project;
    }
}
