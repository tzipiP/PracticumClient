import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { InstructionComponent } from './instruction/instruction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

//import {matRadioGroup} from '@angular/material/mat-radio-group';

import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatLabelModule} from '@angular/material/form-field';

import { CommonModule } from '@angular/common';


//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InstructionComponent,
    NavbarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  //  HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,                              
    ReactiveFormsModule,    
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,

    
    CommonModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    // MatSidenavModule,
    // MatBadgeModule,
    // MatToolbarModule,
    // MatListModule,
    // MatGridListModule,
    MatCardModule,
    // MatStepperModule,
    MatTabsModule,
    // MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    // MatDialogModule,
    // MatTooltipModule,
    // MatSnackBarModule,
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
