import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogDescriptionComponent } from './components/blog-description/blog-description.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostService } from './services/post.service';
import { PageTitleService } from './services/page-title.service';
import { AdminModule } from './admin/admin.module';
import { BaseComponent } from './components/base/base.component';
import { PipesModule } from './pipes/pipes.module';

const appRoutes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: PostsListComponent },
      { path: 'post/:id', component: PostDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    HeaderComponent,
    BlogDescriptionComponent,
    PostDetailsComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule,
    PipesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    PageTitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
