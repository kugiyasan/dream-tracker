import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { Post, Project } from 'src/app/constants';
import { environment } from 'src/app/environments/environment';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
    selector: 'app-input',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent {
    project: Project;

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
        this.project.posts.push(post);
    }

    onScrollDown(event: IInfiniteScrollEvent) {
        console.log('scrolled down!!', event);
    }
}
