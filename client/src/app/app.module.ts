import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MaterialModule } from './material.module';
import { ProjectPageComponent } from './project-page/project-page.component';

@NgModule({
    declarations: [AppComponent, ProjectCardComponent, ProjectPageComponent],
    imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, MaterialModule],
    
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
