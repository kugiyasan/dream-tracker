import { Component, Input } from '@angular/core';
import { Project } from '../../constants';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
    @Input() project!: Project;

    get routerLink() {
        return `/project/${this.project.id}`;
    }
}
