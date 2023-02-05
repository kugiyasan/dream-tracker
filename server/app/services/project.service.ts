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

    getProject(id: string): Project | undefined {
        return this.projects.find((p) => p.id === id);
    }

    addProject(project: Project): Project {
        this.projects.push(project);
        this.writeFile();
        return project;
    }

    getPosts(id: string): Post[] {
        const index = this.projects.findIndex((p) => p.id === id);
        const project = this.projects[index];
        return project.posts;
    }

    // get a list of posts/day for the last 7 days ordered in a dict as {day: posts}
    getPosts7days(id: string): any {
        const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const index = this.projects.findIndex((p) => p.id === id);
        const project = this.projects[index];
        const posts = project.posts;
        const today = new Date();
        const dayIndex = today.getDay()-1;
        const postsPerDay = {};

        for (let i = 0; i < 7; i++) {
            if (dayIndex - i < 0) {
                postsPerDay[Days[dayIndex - i + 7]] = 0;
            }
            else {
                postsPerDay[Days[dayIndex - i ]] = 0;
            }
        }

    //     for (let i = 0; i < posts.length; i++) {
    //         const post = posts[i];
    //         const postDate = new Date(Number(post.createdAt)*1000);

    //         const diffTime = Math.abs(today.getTime() - postDate.getTime());
    //         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //         if (diffDays < 7) {
    //             posts7days[diffDays] += 1;
    //         }
    //         else {
    //             break;
    //         }
    //     }
    //     return posts7days;
    // }

    for (let i = posts.length-1; i >=0; i--) {
        const post = posts[i];
        const postDate = new Date(Number(post.createdAt)*1000);
        const diffTime = Math.abs(today.getTime() - postDate.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 7) {
            if (dayIndex - diffDays < 0) {
                postsPerDay[Days[dayIndex - diffDays + 7]] += 1;
            }
            else {
                postsPerDay[Days[dayIndex - diffDays ]] += 1;
            }
        }
        else {
            break;
        }
    }
    return postsPerDay;
}

    getProjects12months(): any {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const today = new Date();
        const monthIndex = today.getMonth()-1;
        const projectsPerMonth = {};

        for (let i = 0; i < 12; i++) {
            if (monthIndex - i < 0) {
                projectsPerMonth[months[monthIndex - i + 12]] = 0;
            }
            else {
                projectsPerMonth[months[monthIndex - i]] = 0;
            }
        }
        
        for (let i = this.projects.length-1; i >=0; i--) {
            const project = this.projects[i];
            const projectDate = new Date(Number(project.createdAt)*1000);
            const diffTime = Math.abs(today.getTime() - projectDate.getTime());
            const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
            if (diffMonths < 12) {
                if (monthIndex - diffMonths < 0) {
                    projectsPerMonth[months[monthIndex - diffMonths + 12]] += 1;
                }
                else {
                    projectsPerMonth[months[monthIndex - diffMonths]] += 1;
                }
            }
            else {
                break;
            }
        }
        return projectsPerMonth;
    }

    addPost(id: string, post: Post): Project {
        const index = this.projects.findIndex((p) => p.id === id);
        const project = this.projects[index];
        project.posts.push(post);
        this.writeFile();
        return project;


    }
}
