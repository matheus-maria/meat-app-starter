import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/core/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor( private restaurantsService: RestaurantService, private route: ActivatedRoute ) { }

  restaurant: Restaurant

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe( restaurant => this.restaurant = restaurant )
  }

}
