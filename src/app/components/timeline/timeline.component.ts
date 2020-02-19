import { Component, OnInit, Input } from '@angular/core'
import { TimelineRecord } from './timeline'

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    @Input() timeline: TimelineRecord[] = []
    constructor() {}

    ngOnInit(): void {}
}
