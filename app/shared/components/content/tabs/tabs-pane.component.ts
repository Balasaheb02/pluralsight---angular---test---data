import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'saa-tabs-pane',
    templateUrl: 'tabs-pane.component.html'
})

export class TabsPaneComponent {
    @Input('title') title: string;
    @Input() active = false;
}