import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from '../../core/restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations:[
    trigger('touggleSearch',[
      state('hidden',style({ opacity: 0, 'max-height': '0px' })),
      state('visible',style({ opacity: 1, 'max-height': '70px', 'margin-top': '20px' })),
      transition('* => *',animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  constructor( private restaurantService: RestaurantService ) { }

  searchBarState: string = 'hidden'

  restaurants: Restaurant[]

  ngOnInit() {
    this.restaurantService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

  touggleSearch = () => {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
