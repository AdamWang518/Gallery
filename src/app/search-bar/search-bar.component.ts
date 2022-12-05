import { searchInfo } from './../searchInfo';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TaskService } from '../task.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private service: TaskService) {
  }
  centuryFill(): void {
  }
  ngOnInit(): void {
  }
  search():void{
    this.pack.author=this.author;
    this.pack.name=this.name;
    this.pack.attribute=this.attribute;
    this.pack.century=this.century;
    this.service.subject.next(this.pack);
  }
  pack:searchInfo=new searchInfo();
  author: String = "";
  name: String = "";
  attribute: String = "";
  century:String="";
  centuries: String[] = ["1世紀", "2世紀", "3世紀", "4世紀", "5世紀", "6世紀", "7世紀", "8世紀", "9世紀", "10世紀", "11世紀", "12世紀", "13世紀", "13世紀", "14世紀", "15世紀", "16世紀", "17世紀", "18世紀", "19世紀", "20世紀", "21世紀"];

}
