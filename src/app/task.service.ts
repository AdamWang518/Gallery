import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { searchInfo } from './searchInfo';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  subject = new Subject<searchInfo>();
  constructor() { }
}
