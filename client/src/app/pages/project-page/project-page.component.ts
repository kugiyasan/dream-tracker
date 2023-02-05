import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { Post, Project } from 'src/app/constants';
import { environment } from 'src/app/environments/environment';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-input',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent {
    project: Project;
    posts: any[] = [];
    color : string = '#607D8B';
    icon : string = PrimeIcons.CHECK;

    constructor(private route: ActivatedRoute, private readonly http: HttpClient, private readonly projectDataService: ProjectDataService) {
        this.project = {
            id: '',
            name: '',
            description: '',
            thumbnail: '',
            author: '',
            createdAt: '',
            posts: [],
        };
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('projectId') || '';
            this.projectDataService.getProject(id).subscribe((data) => {
                this.project = data;
                this.project.posts = this.project.posts.reverse();
                this.project.posts.forEach((post) => {
                    let date = new Date();
                    date.setTime(parseInt(post.createdAt));
                    post.createdAt = date.toLocaleDateString();
                });
            });
        });
    }

    createValueInput(title: string, body: string) {
        const post: Post = {
            title,
            body,
            author: 'Joe Bleau',
            createdAt: new Date().getTime().toString(),
        };

        this.http.patch(`${environment.serverUrl}/project/addPost/${this.project.id}`, post).subscribe((response) => {
            console.log(response);
        });
        let date = new Date();
        date.setTime(parseInt(post.createdAt));
        post.createdAt = date.toLocaleDateString();
        this.project.posts.unshift(post);
        this.project.posts = [...this.project.posts]
        
    }

    onScrollDown(event: IInfiniteScrollEvent) {
        console.log('scrolled down!!', event);
    }
}
