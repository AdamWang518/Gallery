import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painting-item',
  templateUrl: './painting-item.component.html',
  styleUrls: ['./painting-item.component.css']
})
export class PaintingItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url:String="https://www.ss.net.tw/images/product_images/popup_images/2428_01649477783.jpg";
}
