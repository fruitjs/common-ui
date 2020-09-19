import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbolComponent } from './nbol.component';
import { NBolAccordionComponent } from './components/accordion/accordion.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { NBolPaginationComponent } from './components/pagination/pagination.component';
import { NBolTooltipComponent } from './components/tooltip/tooltip.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NBolToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [NbolComponent, NBolAccordionComponent, ModalDialogComponent, NBolPaginationComponent,
    NBolTooltipComponent, NBolToastComponent],
  imports: [AccordionModule, CommonModule, ModalModule, PaginationModule, TooltipModule
  ],
  exports: [NbolComponent, NBolAccordionComponent, ModalDialogComponent, NBolPaginationComponent,
    NBolTooltipComponent, NBolToastComponent]
})
export class NbolModule { }
