import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AllProjectsPageComponent } from './all-projects-page/all-projects-page.component';

@NgModule({
    declarations: [AppComponent, ProjectCardComponent, ProjectPageComponent, AllProjectsPageComponent],
    imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule],

    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
