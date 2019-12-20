import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Park } from '../models/park';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, OnDestroy {

  park: Park;
  loaded: boolean = false;
  routeSubscription;
  parkSubscription;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(
      (data: any) => {
        console.log(data.params.park);
        this.park = data.params.park;
        this.getExplorePark(this.park)
      }
    )
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.parkSubscription.unsubscribe();
  }

  getExplorePark(id) {
    this.parkSubscription = this.http.explorePark(id).subscribe(
      (data: Park) => {
        console.log(data)
        this.park = data;
        this.loaded = true;
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

}
