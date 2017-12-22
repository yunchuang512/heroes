import {Component, OnInit} from '@angular/core';
import {Timeitem} from '../helper/timeitem';
import {TimeitemService} from '../serivice/timeitem.service';
import {element} from 'protractor';

@Component({
  selector: 'timeline-home',
  templateUrl: '../template/timeline-home.component.html',
  styleUrls: [
    '../componentcss/timeline-home.component.css'
  ]
})

export class TimelineHomeComponent implements OnInit {
  title = 'Timeline Home';
  timeitems: Timeitem[];

  constructor(private timeitemService: TimeitemService) {
  }

  getTimeitems(): void {
    this.timeitemService.getTimeitems().then(timeitems => this.timeitems = timeitems);
  }

  ngOnInit(): void {
    console.log('Init TimelineHomeComponent');
    this.getTimeitems();
    $('.my-card-left-div').click(function () {
      alert(1);
    });

  }

  changeitemPosition(timeitem): void {
    if ($(window).width() < 991) {
      return;
    } else {
      if (timeitem.position === 1) {
        timeitem.position = 0;
      } else {
        timeitem.position = 1;
      }
    }
  }

}
