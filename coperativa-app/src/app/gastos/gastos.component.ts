import { Component, OnInit } from '@angular/core';
import {Gasto} from './gasto';
import {GastoService} from './gasto.service';



@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
})
export class GastosComponent implements OnInit {

  gasto: Gasto[]; 
  
  constructor(private gastoService: GastoService ) { // se define el atributo y se asigna el inyectable   
  }

  ngOnInit(): void {
    this.gastoService.getGastos().subscribe(
      gasto => this.gasto = gasto
    );
  }

 }
