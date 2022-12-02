import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { PostComponent } from './post/post.component';
import { HighlightDirective } from './lib/highlight.directive';
import { UserInfoComponent } from './user-info/user-info.component';
import { UtentiComponent } from './utenti/utenti.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    PostComponent,
    HighlightDirective,
    UserInfoComponent,
    UtentiComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
