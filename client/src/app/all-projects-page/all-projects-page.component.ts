import { Component } from '@angular/core';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { Post, Project } from '../interfaces/project';

@Component({
    selector: 'app-all-projects-page',
    templateUrl: './all-projects-page.component.html',
    styleUrls: ['./all-projects-page.component.scss'],
})
export class AllProjectsPageComponent {
    post: Post = {
        title: 'Post 1',
        body: 'Post 1 content',
        author: 'Jean-Claude',
        createdAt: new Date().toString(),
    };
    project: Project = {
        id: '1',
        name: 'Project 1',
        description: 'Project 1 description',
        author: 'Jean-Claude',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        posts: [this.post, this.post, this.post],
    };

    projects: Project[] = [];

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.projects.push(this.project);
        }
    }

    onScrollDown(event: IInfiniteScrollEvent) {
        console.log('scrolled down!!', event);
        for (let i = 0; i < 10; i++) {
            this.projects.push({...this.project, name: `Project ${i}`});
        }
    }
}
