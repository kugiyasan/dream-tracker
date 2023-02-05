import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AllProjectsPageComponent } from './all-projects-page/all-projects-page.component';
import { AppMaterialModule } from './modules/material.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, ProjectCardComponent, ProjectPageComponent, AllProjectsPageComponent],
    imports: [AppMaterialModule, AppRoutingModule, BrowserAnimationsModule, BrowserModule, HttpClientModule, InfiniteScrollModule],

    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
