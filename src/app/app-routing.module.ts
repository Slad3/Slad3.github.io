import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FeedComponent } from './components/feed/feed.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FacebookDataAnalysisComponent } from './components/datascience/facebook-data-analysis/facebook-data-analysis.component';
import { DatascienceHomeComponent } from './components/datascience/datascience-home/datascience-home.component';
import { InstagramDataAnalysisComponent } from './components/datascience/instagram-data-analysis/instagram-data-analysis.component';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TheOfficeScriptAnalyzerComponent } from './components/datascience/the-office-script-analyzer/the-office-script-analyzer.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectPageComponent} from './components/project-page/project-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: FeedComponent },
  { path: 'experience', component: ProfessionalExperienceComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'project', component:  ProjectPageComponent},
  { path: 'project/:title', component:  ProjectPageComponent},
  { path: 'datascience', component: DatascienceHomeComponent },
  { path: 'FacebookAnalysis', component: FacebookDataAnalysisComponent },
  { path: 'InstagramAnalysis', component: InstagramDataAnalysisComponent },
  { path: 'TheOfficeScriptAnalysis', component: TheOfficeScriptAnalyzerComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy', scrollPositionRestoration: "enabled" })],
  
  exports: [RouterModule],
})
export class AppRoutingModule {}
