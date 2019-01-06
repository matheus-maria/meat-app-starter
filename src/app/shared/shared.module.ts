import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        InputComponent,
        RadioComponent,
        RatingComponent
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
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]

})
export class SharedModule { }