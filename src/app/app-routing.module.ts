import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: ShowPostsComponent,
    pathMatch: "full"
  },
  {
    path: "posts/:id",
    component: PostDetailsComponent,
    pathMatch: "full"
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
