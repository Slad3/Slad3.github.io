import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Request } from './api/request.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './components/feed/feed.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { PostComponent } from './components/post/post.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FacebookDataAnalysisComponent } from './components/datascience/facebook-data-analysis/facebook-data-analysis.component';
import { DatascienceHomeComponent } from './components/datascience/datascience-home/datascience-home.component';
import { InstagramDataAnalysisComponent } from './components/datascience/instagram-data-analysis/instagram-data-analysis.component';
import { MessagesComponent } from './components/datascience/messages/messages.component';

import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';
import { PublicationsComponent } from './components/publications/publications.component';

import { TheOfficeScriptAnalyzerComponent } from './components/datascience/the-office-script-analyzer/the-office-script-analyzer.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { MarkdownComponent } from './components/markdown-display/markdown-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    DatascienceComponent,
    ProjectsComponent,
    ReferenceComponent,
    SinglepostComponent,
    PostComponent,
    ExperienceComponent,
    FacebookDataAnalysisComponent,
    DatascienceHomeComponent,
    InstagramDataAnalysisComponent,
    MessagesComponent,
    ProfessionalExperienceComponent,
    PublicationsComponent,
    TheOfficeScriptAnalyzerComponent,
    ProjectCardComponent,
    SkillsComponent,
    ProjectsPageComponent,
    ProjectPageComponent,
    MarkdownComponent,
  ],
  imports: [
	  	BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		HighchartsChartModule,
		NgxSpinnerModule,
		BrowserAnimationsModule,
	],
  providers: [Request, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
