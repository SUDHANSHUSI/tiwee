import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { PipesModule } from '../pipes/pipes.module';
import { AdminPostEditComponent } from './admin-post-edit/admin-post-edit.component';
import { AdminPostCreateComponent } from './admin-post-create/admin-post-create.component';
import { AdminPostFormComponent } from './admin-post-form/admin-post-form.component';
import { AdminPostsListComponent } from './admin-posts-list/admin-posts-list.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    PipesModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminPostEditComponent,
    AdminPostCreateComponent,
    AdminPostFormComponent,
    AdminPostsListComponent,
    AdminPostsComponent,
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
