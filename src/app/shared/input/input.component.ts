import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName} from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  constructor() { }

  input: any

  @Input() label: string
  @Input() errorMessage: string = 'Erro'
  @Input() sucessMessage: string = 'Ok'

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  ngAfterContentInit(): void {    
    this.input = this.model || this.control
    if(this.input === undefined){
      
      throw new Error('Esse Componente precisa ser inicializado com uma diretiva ngModel ou FormControlName')
      
    }
  }

  ngOnInit(): void {
  }

  hasSucess = (): boolean => {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError = (): boolean => {
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }
}
