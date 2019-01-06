import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations:[
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]

})
export class SharedModule { }