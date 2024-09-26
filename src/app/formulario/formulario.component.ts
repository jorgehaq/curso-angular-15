import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    constructor(){}

    openAlert:boolean=true


    mostrarEnConsola(name:string){

      console.log(name);
      this.openAlert=true
    
    }
}
