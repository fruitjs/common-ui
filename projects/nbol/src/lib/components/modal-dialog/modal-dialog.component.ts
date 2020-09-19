import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
    selector: 'app-modal-dialog',
    templateUrl: 'modal-dialog.component.html',
    styleUrls: ['modal-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ModalDialogComponent implements OnInit {
    @ViewChild('childModal', { static: false }) childModal: ModalDirective;
    constructor() { }

    ngOnInit() { }
    showChildModal(): void {
        this.childModal.show();
    }

    hideChildModal(): void {
        this.childModal.hide();
    }
}
