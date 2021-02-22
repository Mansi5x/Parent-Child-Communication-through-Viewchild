import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueserviceService {
   datasrc$ =new BehaviorSubject('default data');

  constructor() { }
}
