import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'nbol-toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class NBolToastComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}