import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  nombre?:string;

  
  constructor(){}

  personas:Persona[]=[
    { nombre:'Juan',edad:42},
    { nombre:'Pedro',edad:16 },
    { nombre:'Cecilio',edad:81},
  ]


}
