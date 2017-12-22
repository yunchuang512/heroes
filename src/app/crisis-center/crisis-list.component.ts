import {Component, OnInit} from '@angular/core';
import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'crisis-list',
  templateUrl: './crisis-list.component.html'
})

export class CrisisListComponent implements OnInit {
  crises: Crisis[];

  constructor(private crisisService: CrisisService, private router: Router, private route: ActivatedRoute) {

  }

  getCrises(): void {
    this.crisisService.getCrises().then(crises => this.crises = crises);
  }

  ngOnInit(): void {
    this.getCrises();
  }

  onSelect(crisis: Crisis): void {
    this.router.navigate(['detail'], {queryParams: {id: crisis.id}, relativeTo: this.route});
  }
}
