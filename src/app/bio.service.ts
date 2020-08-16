import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BioService {
  tabSelection: BehaviorSubject<string> = new BehaviorSubject<string>('home');
  getTabSelection = this.tabSelection.asObservable();
  constructor() { }
  changeTab(tabName: string) {
    this.tabSelection.next(tabName);
  }
}
