import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { GastosComponent } from './gastos/gastos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import {GastoService} from './gastos/gasto.service';
import {RouterModule, Routes} from '@angular/router';
import { FormComponent } from './gastos/form.component'; 
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
   {path: '' , redirectTo: '/gasto', pathMatch: 'full'},
   {path: 'directivas', component: DirectivaComponent},
   {path: 'gasto', component: GastosComponent},
   {path: 'gasto/form', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [GastoService], // registro de servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
