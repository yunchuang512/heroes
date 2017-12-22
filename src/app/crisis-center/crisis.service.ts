import {Injectable} from '@angular/core';
import {Crisis} from './crisis';
import {CRISIS} from './mock-crisis';

@Injectable()
export class CrisisService {
  constructor() {
  }

  getCrises(): Promise<Crisis[]> {
    return Promise.resolve(CRISIS);
  }

  getCrisisById(id: number): Promise<Crisis> {
    return this.getCrises().then(crises => crises.find(c => c.id === id));
  }
}
