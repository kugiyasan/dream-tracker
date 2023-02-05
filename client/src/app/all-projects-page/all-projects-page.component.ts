import { Component, OnInit } from '@angular/core';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { Project } from '../constants';
import { ProjectDataService } from '../project-data.service';

@Component({
    selector: 'app-all-projects-page',
    templateUrl: './all-projects-page.component.html',
    styleUrls: ['./all-projects-page.component.scss'],
})
export class AllProjectsPageComponent implements OnInit {
    projects: Project[] = [];

    constructor(private readonly projectDataService: ProjectDataService) {}

    ngOnInit() {
        this.projectDataService.getProjects().subscribe((data) => {
            this.projects = data;
        });
    }

    onScrollDown(event: IInfiniteScrollEvent) {
        console.log('scrolled down!!', event);
    }
}
