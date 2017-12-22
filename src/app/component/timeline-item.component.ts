import {Component, Input, OnInit} from '@angular/core';
import {Timeitem} from '../helper/timeitem';

@Component({
  selector: 'timeline-item',
  templateUrl: '../template/timeline-item.component.html'
})

export class TimelineItemComponent implements OnInit {
  title = 'Timeline Item';
  @Input() timeitem: Timeitem;

  ngOnInit(): void {
  }

}
