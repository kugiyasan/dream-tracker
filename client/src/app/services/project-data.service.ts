import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../constants';
import { environment } from 'src/app/environments/environment';

const { serverUrl } = environment;

@Injectable({
    providedIn: 'root',
})
export class ProjectDataService {
    constructor(private readonly http: HttpClient) {}

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${serverUrl}/project`);
    }

    getProjectsPerMonth = () => {
        //console.log(`${serverUrl}/project/stats/year/`);
        return this.http.get(`${serverUrl}/project/stats/year/`);
    };

    getPostsPerDay = (id: string) => {
        return this.http.get(`${serverUrl}/project/stats/week/${id}`);
    };

    getProject(id: string): Observable<Project> {
        return this.http.get<Project>(`${serverUrl}/project/${id}`);
    }
}
