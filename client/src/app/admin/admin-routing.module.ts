import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPostEditComponent } from './admin-post-edit/admin-post-edit.component';
import { AdminPostCreateComponent } from './admin-post-create/admin-post-create.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'posts', component: AdminPostsComponent },
          { path: 'post/edit/:id', component: AdminPostEditComponent },
          { path: 'post/create', component: AdminPostCreateComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
