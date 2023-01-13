import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  // Crear atributo de tipo FormBuilder
  constructor(private formBuilder : FormBuilder){ }

  // Estructura del formulario reactivo
  registroForm = this.formBuilder.group({
    dni:[ '', { validators: [Validators.required, Validators.pattern('[0-9]{8}')]}],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    fechanac: ['', Validators.required],
    sueldo: ['', Validators.required],
    comision: ['', { validators: [ Validators.required, 
                                   Validators.max(1),
                                   Validators.min(0.01)
                                 ]
                   }
              ],
  });

  // Generar un metodo get para cada campo del formularior reactivo
  get dni(){ return this.registroForm.get('dni'); }
  get nombres(){ return this.registroForm.get('nombres'); }
  get apellidos(){ return this.registroForm.get('apellidos'); }
  get fechanac(){ return this.registroForm.get('fechanac'); }
  get sueldo(){ return this.registroForm.get('sueldo'); }
  get comision(){ return this.registroForm.get('comision'); }


  // Generar el metodo onSubmit para registrar los datos del formulario en un Array
  datos = new Array;

  onSubmit(){
    if(!this.registroForm.valid){
      alert('Alguna validación no se ha cumplido');
      return;
    }
    this.datos.push({
      'Dni': this.registroForm.get('dni')?.value,
      'Nombres': this.registroForm.get('nombres')?.value,
      'Apellidos': this.registroForm.get('apellidos')?.value,
      'FechaNac': this.registroForm.get('fechanac')?.value,
      'Sueldo': this.registroForm.get('sueldo')?.value,
      'Comision': this.registroForm.get('comision')?.value,
    });
    console.log(this.datos);
  }

  Refrescar(){
    //location.reload();
    this.registroForm.reset();
  }

}
