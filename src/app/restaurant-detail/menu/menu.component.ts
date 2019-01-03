import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  menu: MenuItem[]

  ngOnInit() {
    this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe( menu => this.menu = menu )
  }

  addMenuItem = ( item: MenuItem ) => {
    console.log( item )
  }

}
