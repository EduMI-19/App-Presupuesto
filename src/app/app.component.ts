import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { IngresoComponent } from "./ingreso/ingreso.component";
import { EgresoComponent } from "./egreso/egreso.component";
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CabeceroComponent, FormularioComponent, IngresoComponent, EgresoComponent]
})
export class AppComponent {
  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];

  constructor(public ingresoServicio:IngresoServicio, public egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal:number=0
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor
    });
    return ingresoTotal
  }

  getEgresoTotal(){
    let egresoTotal:number=0
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor
    });
    return egresoTotal
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal()
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal()
  }
}
