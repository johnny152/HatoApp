import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMiniFabButton } from '@angular/material/button';
import { MatFabButton } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoModalComponent } from '../info-modal/info-modal.component';


@Component({
  selector: 'app-floatbutton',
  imports: [CommonModule, MatMiniFabButton, MatFabButton],
  templateUrl: './floatbutton.component.html',
  styleUrl: './floatbutton.component.css'
})
export class FloatbuttonComponent {

  public openMenu: boolean = false;
  public formulario: string = 'https://docs.google.com/forms/d/e/1FAIpQLSc27p-XHu0KD1s9egXf_yN5Bc1s-6WaSN-3uRbfgY1ME5dNlg/viewform?usp=header';
  constructor(private dialog: MatDialog) {}

  isOver = false;

  clickMenu() {
    this.openMenu = !this.openMenu;
  }

  abrirFormulario() {
    window.open(this.formulario, "_blank");
  }
  confirmDialog() {
    const ref: MatDialogRef<InfoModalComponent> = this.dialog.open(
      InfoModalComponent,
      {
        width: '600px',
        height: '430px',
        data: {
          message: 'Are you sure to cancel without saving the data?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );
  }
}
