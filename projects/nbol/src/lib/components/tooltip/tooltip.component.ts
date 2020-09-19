import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nbol-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.scss']
})

export class NBolTooltipComponent implements OnInit {
    constructor() { }
    @Input() getContent: string;
    ngOnInit() { }
}