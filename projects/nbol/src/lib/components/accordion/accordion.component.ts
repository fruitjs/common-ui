import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { accordianSettings } from "../../models/settings";
@Component({
    selector: 'nbol-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class NBolAccordionComponent implements OnInit {
    private defaultSettings = {
        heading: '',
        subHeading: '',
        isOpen: true,
        roundCorner: true
    };
    @Input() settings: accordianSettings;

    constructor() {
    }

    ngOnInit() {
        // overwritting defaults
        this.settings = { ...this.defaultSettings, ...this.settings };
    }
    log(event) {
        console.log('event = ' + event);
        this.settings.isOpen = event;
    }
}