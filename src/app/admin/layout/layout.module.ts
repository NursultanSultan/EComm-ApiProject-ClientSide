import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    // BrowserModule,
    // AppRoutingModule,
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule
  ],
  exports:[
    LayoutComponent
  ]
  
})
export class LayoutModule { }
