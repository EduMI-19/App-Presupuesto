import { Component, Input, OnInit } from '@angular/core';
import { EgresoServicio } from './egreso.servicio';
import { Egreso } from './egreso.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[] = [];
  @Input()ingresoTotal: number=0;

  constructor(public egresoServicio:EgresoServicio){}

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }
  
  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }
  calcularPorsentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
