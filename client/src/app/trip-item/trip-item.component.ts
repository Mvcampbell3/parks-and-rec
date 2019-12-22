import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip'

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss']
})
export class TripItemComponent implements OnInit {

  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {
  }

}
