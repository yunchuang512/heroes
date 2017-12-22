import {Component, OnInit} from '@angular/core';
import {CrisisService} from './crisis.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Crisis} from './crisis';
import {DialogService} from '../dialog.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: 'crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;
  editDescribe: string;

  constructor(private crisisService: CrisisService,
              private router: Router,
              private route: ActivatedRoute,
              public dialogService: DialogService) {
  }

  ngOnInit(): void {
    /*this.route.queryParams.subscribe(queryParams => {
      this.crisisService.getCrisisById(+queryParams.id).then(crisis => {
        this.crisis = crisis;
        this.editName = crisis.name;
        this.editDescribe = crisis.describe;
      });
    });*/
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.crisis = data.crisis;
      this.editName = data.crisis.name;
      this.editDescribe = data.crisis.describe;
    });
  }

  goBack(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || (this.crisis.name === this.editName && this.crisis.describe === this.editDescribe)) {
      return true;
    }
    return this.dialogService.confirm('Discard changes');
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.crisis.describe = this.editDescribe;
    this.gotoCrises();
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
