import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsPageComponent } from './pages/all-projects-page/all-projects-page.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'projects', component: AllProjectsPageComponent },
    { path: 'project/:projectId', component: ProjectPageComponent },
    { path: 'new-project', component: NewProjectComponent },
    { path: 'stats', component: StatsComponent },
    { path: '**', redirectTo: '/projects' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
