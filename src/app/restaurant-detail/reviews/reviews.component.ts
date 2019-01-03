import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  reviews: Observable<any>

  ngOnInit() { 
    // Both ways gona work
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
    //this.restaurantService.reviewsOfRestaurant(this.route.snapshot.params['id']).subscribe( review => this.review = review )
  }

}
