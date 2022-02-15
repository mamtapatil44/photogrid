import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoComparisionComponent } from './photo-comparision/photo-comparision.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule, } from '@angular/material/paginator';
import { AddPhotoComponent } from './add-photo/add-photo.component'
@NgModule({
  declarations: [
    AppComponent,
    PhotoComparisionComponent,
    AddPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    NgxDatatableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
