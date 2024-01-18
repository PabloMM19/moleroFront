import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/home/admin-home/admin-home.component';
import { AppRoutingModule } from './app-routing.module';
import { PacientesViewRoutedComponent } from './components/pacientes/pacientes-view-routed/pacientes.view.routed.component';
import { PacientesViewUnroutedComponent } from './components/pacientes/pacientes-view-unrouted/pacientes.view.unrouted.component';
import { VisitasViewRoutedComponent } from './components/visitas/visitas-view-routed/visitas.view.routed.component';
import { VisitasViewUnroutedComponent } from './components/visitas/visitas-view-unrouted/visitas.view.unrouted.component';
import { CalendarioViewRoutedComponent } from './components/calendario/calendario-view-routed/calendario.view.routed.component';
import { CalendarioViewUnroutedComponent } from './components/calendario/calendario-view-unrouted/calendario.view.unrouted.component';
import { DiagnosticoViewRoutedComponent } from './components/diagnosticos/diagnostico-view-routed/diagnostico-view-routed.component';
import { DiagnosticoViewUnroutedComponent } from './components/diagnosticos/disgnostico-view-unrouted/diagnostico-view-unrouted.component';
import { MedicacionViewRoutedComponent } from './components/medicacion/medicacion-view-routed/medicacion-view-routed.component';
import { MedicacionViewUnroutedComponent } from './components/medicacion/medicacion-view-unrouted/medicacion-view-unrouted.component';
import { MedidasViewRoutedComponent } from './components/medidas/medidas-view-routed/medidas-view-routed.component';
import { MedidasViewUnroutedComponent } from './components/medidas/medidas-view-unrouted/medidas-view-unrouted.component';
import { ProgenitoresViewRoutedComponent } from './components/progenitores/progenitores-view-routed/progenitores-view-routed.component';
import { ProgenitoresViewUnroutedComponent } from './components/progenitores/progenitores-view-unrouted/progenitores-view-unrouted.component';
import { PruebasViewRoutedComponent } from './components/pruebas/pruebas-view-routed/pruebas-view-routed.component';
import { PruebasViewUnroutedComponent } from './components/pruebas/pruebas-view-unrouted/pruebas-view-unrouted.component';
import { SeguromedicoViewRoutedComponent } from './components/seguromedico/seguromedico-view-routed/seguromedico-view-routed.component';
import { SeguromedicoViewUnroutedComponent } from './components/seguromedico/seguromedico-view-unrouted/seguromedico-view-unrouted.component';
import { MenuAppComponent } from './components/shared/header/menuApp/menuApp.component';
import { FooterAppComponent } from './components/shared/footer/footerApp/footerApp.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    PacientesViewRoutedComponent,
    PacientesViewUnroutedComponent,
    VisitasViewRoutedComponent,
    VisitasViewUnroutedComponent,
    CalendarioViewRoutedComponent,
    CalendarioViewUnroutedComponent,
    DiagnosticoViewRoutedComponent,
    DiagnosticoViewUnroutedComponent,
    MedicacionViewRoutedComponent,
    MedicacionViewUnroutedComponent,
    MedidasViewRoutedComponent,
    MedidasViewUnroutedComponent,
    ProgenitoresViewRoutedComponent,
    ProgenitoresViewUnroutedComponent,
    PruebasViewRoutedComponent,
    PruebasViewUnroutedComponent,
    SeguromedicoViewRoutedComponent,
    SeguromedicoViewUnroutedComponent,
    MenuAppComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
