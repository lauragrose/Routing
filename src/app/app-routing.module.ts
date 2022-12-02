import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { post } from './post.service';
import { PostComponent } from './post/post.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UtentiComponent } from './utenti/utenti.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "post/attivi",
    component: PostAttiviComponent
  },
  {
    path: "post/inattivi",
    component: PostInattiviComponent
  },
  {
    path: "post/attivi/:id",
    component: PostComponent
  },
  {
    path: "post/inattivi/:id",
    component: PostComponent
  },
  {
    path: "utenti",
    component: UtentiComponent,
    children: [
      {
      path: "userInfo/:id",
      component: UserInfoComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
