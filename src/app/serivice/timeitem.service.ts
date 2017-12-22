import {Injectable} from '@angular/core';
import {Timeitem} from '../helper/timeitem';
import {TIMEITEMS} from '../helper/mock-timeitems';

@Injectable()
export class TimeitemService {
  /**
   * get all timeitems
   * @returns {Promise<Timeitem[]>}
   */
  getTimeitems(): Promise<Timeitem[]> {
    return Promise.resolve(TIMEITEMS);
  }

  /**
   * get timeitem by id
   * @param {number} id
   * @returns {Promise<Timeitem>}
   */
  getTimeitemById(id: number): Promise<Timeitem> {
    return this.getTimeitems().then(timeitems => timeitems.find(hero => hero.id === id));
  }

}
