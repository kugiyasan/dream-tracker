import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post, Project } from 'src/app/constants';
import { environment } from 'src/app/environments/environment';
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'app-new-project',
    templateUrl: './new-project.component.html',
    styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent {
    name: string = '';
    description: string = '';

    constructor(private readonly http: HttpClient, private readonly router: Router) {}

    createProject(): void {
        const post: Post = {
            title: 'My first post',
            body: 'This is the start of a wonderful project...',
            author: 'John Doe',
            createdAt: new Date().getTime().toString(),
        };

        const body: Project = {
            id: uuidv4(),
            name: this.name,
            description: this.description,
            author: 'Joe Bleau',
            createdAt: new Date().getTime().toString(),
            thumbnail: 'https://picsum.photos/640/480',
            posts: [post],
        };

        console.log(body);
        this.http.post(`${environment.serverUrl}/project`, body).subscribe(console.log);

        this.router.navigateByUrl('/projects');
    }
}
