import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-park-item',
  templateUrl: './park-item.component.html',
  styleUrls: ['./park-item.component.scss']
})
export class ParkItemComponent implements OnInit {

  @Input() park: any;

  constructor() { }

  ngOnInit() {
  }

}
