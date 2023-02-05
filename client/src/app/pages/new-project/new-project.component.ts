import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project, serverUrl } from 'src/app/constants';
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
        const body: Project = {
            id: uuidv4(),
            name: this.name,
            description: this.description,
            author: 'Joe Bleau',
            createdAt: new Date().getTime().toString(),
            thumbnail: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            posts: [],
        };
        console.log(body);

        this.http.post(`${serverUrl}/project`, body).subscribe(console.log);

        this.router.navigateByUrl('/projects');
    }
}
