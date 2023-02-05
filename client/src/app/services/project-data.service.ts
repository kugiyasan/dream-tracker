import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, serverUrl } from '../constants';

@Injectable({
    providedIn: 'root',
})
export class ProjectDataService {
    constructor(private readonly http: HttpClient) {}

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${serverUrl}/project`);
    }

    getProject(id: string): Observable<Project> {
        return this.http.get<Project>(`${serverUrl}/project/${id}`);
    }
}
