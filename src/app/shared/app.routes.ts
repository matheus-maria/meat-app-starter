import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { RestaurantsComponent } from "../components/restaurants/restaurants.component";
import { RestaurantDetailComponent } from "../components/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "../components/restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "../components/restaurant-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "../modules/order-summary/order-summary.component";
import { NotFoundComponent } from "app/components/not-found/not-found.component";


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: 'app/modules/about/about.module#AboutModule' },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },    
    { path: 'order', loadChildren: 'app/modules/order/order.module#OrderModule' },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: '**', component: NotFoundComponent }
] 