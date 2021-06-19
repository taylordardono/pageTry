import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Guards
import { UserChildGuard } from 'src/app/guards/user-child.guard';
import { userGuard } from 'src/app/guards/user-guard.guard';
//Components
import { ManagementComponent } from './management/management.component';
import { ProductComponent } from './management/product/product.component';
import { WorkerComponent } from './management/worker/worker.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';

export const routes: Routes = [
  {
    path: '/user/:id',
    component: UserComponent,
    canActivate: [userGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivateChild: [UserChildGuard],
      },
      {
        path: 'management',
        component: ManagementComponent,
        canActivateChild: [UserChildGuard],
        loadChildren: () =>
          import('./management/management.module').then(
            (m) => m.ManagementModule
          ),
        children: [
          {
            path: 'product/:id',
            component: ProductComponent,
            canActivateChild: [UserChildGuard],
          },
          {
            path: 'worker/:id',
            component: WorkerComponent,
            canActivateChild: [UserChildGuard],
          },
        ],
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule {}
