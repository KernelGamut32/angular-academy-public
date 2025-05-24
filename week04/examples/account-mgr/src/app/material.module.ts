import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';
import { MatIconModule    } from '@angular/material/icon';
import { MatTableModule   } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule   } from '@angular/material/input';
import { MatCard, MatCardModule    } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
