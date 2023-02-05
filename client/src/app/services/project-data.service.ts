import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project, serverUrl } from '../constants';

@Injectable({
    providedIn: 'root',
})
export class ProjectDataService {
    constructor(private readonly http: HttpClient) {}

    getProjects() {
        return this.http.get<Project[]>(`${serverUrl}/project`);
    }
}
