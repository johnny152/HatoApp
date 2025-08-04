import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDialogModule
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-info-modal',
  imports: [MatDialogModule, MatIconModule, MatFabButton, MatButtonModule],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.css'
})
export class InfoModalComponent {
  message = '';
  public facebook: string = '';
  public twitch: string = "";
  public twitter: string = "";
  public instagram: string = "";


  constructor(
    private dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {
    this.message = data ? data.message : '';
  }


}
