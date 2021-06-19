import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { SearcherComponent } from '../snippets/searcher/searcher.component';
import { ListComponent } from '../snippets/list/list.component';
import { FormularyComponent } from '../snippets/formulary/formulary.component';

@NgModule({
  declarations: [SearcherComponent, ListComponent, FormularyComponent],
  imports: [CommonModule],
  exports: [CommonModule, SearcherComponent, ListComponent, FormularyComponent],
})
export class SharedModule {}
