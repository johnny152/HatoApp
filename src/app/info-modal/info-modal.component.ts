import { Component, Inject, ElementRef } from '@angular/core';
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
  public facebook: string = 'https://www.facebook.com/HatoJoestar';
  public twitch: string = 'https://www.twitch.tv/hatojoestar';
  public twitter: string = 'https://x.com/HatoJoestar';
  public instagram: string = 'https://www.instagram.com/hatojoestar/';
  public youtube: string = 'https://www.youtube.com/@HatoJoestar'
  slideIndex: number = 0;

  images: any = [
    'assets/img_slider/hato_img.JPG',
    'assets/img_slider/hato_img2.jpg',
    'assets/img_slider/hato_img3.png',
  ];



  plusSlides(n: number) {
    debugger;
    if (this.slideIndex >= 2) {
      this.slideIndex = 0;
    } else {
      this.slideIndex += n;

    }
  }
}
