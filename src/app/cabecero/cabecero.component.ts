import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [AppComponent, CurrencyPipe, PercentPipe],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent implements OnInit{
  @Input() presupuestoTotal:number=0;
  @Input() ingresoTotal:number=0;
  @Input() egresoTotal:number=0;
  @Input() porsentajeTotal:number=0;

  constructor(){}

  ngOnInit(): void {
    
  }
}
