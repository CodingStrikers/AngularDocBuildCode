import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
showComponent:any;
  constructor() { }

  ngOnInit() {
    this.showComponent=false;
  }

}
