import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app-error-handler";

@Injectable()
export class RestaurantService {
    
    constructor(private http: Http){}

    restaurants = (): Observable<Restaurant[]> => {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    restaurantById = ( restaurantId: string ): Observable<Restaurant> => {
        return this.http.get(`${MEAT_API}/restaurants/${restaurantId}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant =( restaurantId: string ): Observable<any> => {
        return this.http.get(`${MEAT_API}/restaurants/${restaurantId}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}