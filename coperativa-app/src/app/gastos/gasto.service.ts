import { Injectable } from '@angular/core';
import {GASTOS} from './gasto.json'; 
import { Gasto } from './gasto';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { TipoGasto } from './tipoGasto';

@Injectable({
  providedIn: 'root'
})

export class GastoService {

  private url: string = 'http://localhost:8030/api/gastos'; 
 
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getGastos(): Observable <Gasto[]> {
    
    //return of (GASTOS);
     return this.http.get<Gasto[]>(this.url);  // se hace un cast de GASTO 
  }

  create (gasto: Gasto) : Observable <Gasto>{
    return this.http.post<Gasto>(this.url, gasto, {headers: this.httpHeaders}); 
  }

  getTipo(): Observable <TipoGasto[]>{
     return this.http.get<TipoGasto[]>(this.url + '/tipo'); 
  }

}
