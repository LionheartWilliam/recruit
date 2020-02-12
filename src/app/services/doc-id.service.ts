import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocIDService {

  private docDATA = new BehaviorSubject({});
  currentDATA = this.docDATA.asObservable();

  constructor() { }

  changeDATA( docdata: object) {
    this.docDATA.next( docdata)
  }
}
