import { Component, OnInit } from '@angular/core';
import {Gasto} from './gasto';
import {GastoService} from './gasto.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { TipoGasto } from './tipoGasto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public gasto: Gasto = new Gasto();
  public title: string = "Ingresar gasto" ; 
  tipo: TipoGasto[];

  constructor(private gastoService: GastoService, private router: Router) { }

  ngOnInit(): void {

    this.gastoService.getTipo().subscribe(tipo => this.tipo = tipo);
  }

  public creat(){
    this.gastoService.create(this.gasto).subscribe(gasto => {
      this.router.navigate(['/gasto'])
      swal.fire('Ingreso de datos', `Gasto ${gasto.motivo} creado con éxito!`, 'success')
     }
    );
  }

  compararTipo(o1: TipoGasto, o2:TipoGasto){
    return o1==null || o2==null ? false: o1.idTipo==o2.idTipo; 
  }

}
