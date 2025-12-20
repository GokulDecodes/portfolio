import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySharedServiceService {

  private message = new BehaviorSubject<string>('');
  currentmessage = this.message.asObservable();
  constructor() { }
  updateProjectsCompleted(message: string) {
    this.message.next(message);
  }
}
