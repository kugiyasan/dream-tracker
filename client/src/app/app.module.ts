import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './pages/project-card/project-card.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { StatsComponent } from './pages/stats/stats.component';
import { AllProjectsPageComponent } from './pages/all-projects-page/all-projects-page.component';
import { AppMaterialModule } from './modules/material.module';
import {ChartModule} from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';

import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [AppComponent, ProjectCardComponent, ProjectPageComponent, AllProjectsPageComponent, StatsComponent, NavbarComponent, CardComponent],
    imports: [
        AppMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        InfiniteScrollModule,
        ChartModule,
        InputTextModule,
        InputTextareaModule,
        FormsModule,
        ButtonModule,
        CommonModule,
        TimelineModule,
        CardModule,
        HttpClientModule,
    ],

    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
