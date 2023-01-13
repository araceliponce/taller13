import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListadoComponent } from './form-listado/form-listado.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RetoAComponent } from './reto-a/reto-a.component';



@NgModule({
  declarations: [
    FormListadoComponent,
    FormRegistroComponent,
    RetoAComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormListadoComponent,
    FormRegistroComponent,
    RetoAComponent
  ],
})
export class LoDeAyerModule { }
