import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/core/shared.module';

import { ProductComponent } from '../management/product/product.component';
import { WorkerComponent } from '../management/worker/worker.component';

@NgModule({
  declarations: [WorkerComponent, ProductComponent],
  imports: [SharedModule],
})
export class ManagementModule {}
