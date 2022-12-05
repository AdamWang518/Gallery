import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gallery';
  constructor(private service: TaskService){
    this.paintGetter();
  }
  paintGetter():void{
    this.service.subject.asObservable().subscribe(res => {
      console.log(res);
      // 成功
    })
  }
}
