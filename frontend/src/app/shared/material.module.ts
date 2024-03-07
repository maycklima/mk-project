import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { CurrencyMaskModule } from "ng2-currency-mask";

const MaterialComponents = [
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    FlexLayoutModule,
    CurrencyMaskModule
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [ MaterialComponents ],
  providers: 
  [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline'} }
  ]
})
export class MaterialModule { }