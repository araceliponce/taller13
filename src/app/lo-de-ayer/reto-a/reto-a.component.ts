import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

enum curr{
  ninguno = 0,
  PERU = 'pen',
  EEUU = 'usd'
}

@Component({
  selector: 'app-reto-a',
  templateUrl: './reto-a.component.html',
  styleUrls: ['./reto-a.component.css']
})
export class RetoAComponent {

  unJson = [
    {
      "Apellido": "Arcila", 
      "Casado": false, 
      "Dirección": "Calle 35 # 43 28", 
      "Nombre": "Diego",
      "Telefono": 3859720
      },

      { "Apellido": "Bueno",
      "Casado": false,
      "Dirección": "CR 16A # 53 28",
      "Nombre": "Kevin",
      "Telefono": 31485579954 
      },      
      { 
      "Apellido": "Palomino",
      "Casado": false,
      "Dirección": "CR 25 # 52 33",
      "Nombre": "Natalia",
      "Telefono": 32255945555 
      } 
  ]


  constructor(private nuevoFormBuilder: FormBuilder){}

  nuevoRegistroForm = this.nuevoFormBuilder.group({
    monto: ['', { validators: [Validators.required, Validators.pattern('[0-9]')]}],
    currencies: [[],{}]
  })

  get monto(){ return this.nuevoRegistroForm.get('monto'); }


  //usando interface listado
  currencies: any[] =[];

  ngOnInit(){
    for(let item in curr){
      /* item van a ser los atribtos que no sean numero, o sea solo los nombres de paises, en este caso */
      if(isNaN(Number(item))){
        this.currencies.push({text:item, value:curr[item]})
        /* array. push{text: 'peru',  value: el value de 'peru'} */
      }
    }
  }

}
