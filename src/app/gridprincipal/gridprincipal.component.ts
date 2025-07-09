import { Component } from '@angular/core';
import { archivoService } from '../archivos.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-gridprincipal',
  imports: [CommonModule, MatIconModule],
  templateUrl: './gridprincipal.component.html',
  styleUrl: './gridprincipal.component.css',
})
export class GridprincipalComponent {

  archivos: string[] = [];
  audioActual: HTMLAudioElement | null = null;


  constructor(private ArchivoService: archivoService) {}

  ngOnInit() {
    this.ArchivoService.obtenerArchivos().subscribe(data => {
      this.archivos = data;
    });
  }

  reproducirAudio(nombre: string) {
    if (this.audioActual) {
      this.audioActual.pause();
      this.audioActual.currentTime = 0;
    }

    this.audioActual = new Audio(`assets/audios/${nombre}.mp3`);
    this.audioActual.play();

  }
  detenerAudio() {
    if (this.audioActual) {
      this.audioActual.pause();
      this.audioActual.currentTime = 0;
      this.audioActual = null;
    }
  }

  pausarAudio(){
   this.audioActual?.pause();

  }

}


