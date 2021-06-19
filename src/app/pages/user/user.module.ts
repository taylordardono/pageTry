import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared.module';
//User routing
import { UserRoutingModule } from './user-routing.module';
//Components
import { ManagementComponent } from './management/management.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    ManagementComponent
  ],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
