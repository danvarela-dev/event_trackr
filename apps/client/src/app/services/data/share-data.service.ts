import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private dataSubject = new BehaviorSubject<boolean | null>(null);
  data$ = this.dataSubject.asObservable();

  constructor() {}

  sendData(data: boolean) {
    this.dataSubject.next(data);
  }
}
