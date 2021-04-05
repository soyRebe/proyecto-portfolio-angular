import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*import { FormsModule, 
          ReactiveFormsModule,
          FormGroup,
          FormControl, 
          Validators 
        } 
          from '@angular/forms/';*/
import { routing, appRoutingProviders } from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {  MDBBootstrapModule,
          ButtonsModule,
          WavesModule,
          NavbarModule,
          CollapseModule,
          CheckboxModule,
          InputsModule,
          InputUtilitiesModule,
          IconsModule,
          CardsModule, }
  from 'angular-bootstrap-md';

  import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
  


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    //FormsModule,
    //FormGroup,
    //FormControl, 
    //Validators,
    MDBBootstrapModule,
    ButtonsModule,
    WavesModule,
    NavbarModule,
    CollapseModule,
    CheckboxModule,
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    CardsModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
   
  




  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
