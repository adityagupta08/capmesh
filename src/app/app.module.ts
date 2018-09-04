import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BioImageComponent } from './profile/bio-image/bio-image.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { BioImageService } from './profile/Services/bio-image.service'
import { ExperienceService } from './profile/Services/experience.service';
import { EducationService } from './profile/Services/education.service';
import { CertificationService } from './profile/Services/certification.service';
import { AwardsService } from './profile/Services/awards.service';
import { PublicationsService } from './profile/Services/publications.service'
import { SkillsService } from './profile/Services/skills.service'
import { EndorsementService } from './profile/Services/endorsement.service';
import { EducationComponent } from './profile/education/education.component';
import { CertificationComponent } from './profile/accomplishment/certification/certification.component';
import { AwardsComponent } from './profile/accomplishment/awards/awards.component';
import { PublicationsComponent } from './profile/accomplishment/publications/publications.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { EndorsementComponent } from './profile/endorsement/endorsement.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Ng2EmojiModule } from 'ng2-emoji';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ProfileComponent,
    NavComponent,
    FooterComponent,

    BioImageComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    AwardsComponent,
    PublicationsComponent,
    SkillsComponent,
    EndorsementComponent,
    ChatboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    Ng2EmojiModule.forRoot()
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
