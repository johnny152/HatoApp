import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMiniFabButton } from '@angular/material/button';
import { MatFabButton } from '@angular/material/button';


@Component({
  selector: 'app-floatbutton',
  imports: [CommonModule, MatMiniFabButton, MatFabButton],
  templateUrl: './floatbutton.component.html',
  styleUrl: './floatbutton.component.css'
})
export class FloatbuttonComponent {

  public openMenu: boolean = false;
  public formulario: string = 'https://docs.google.com/forms/d/e/1FAIpQLSc27p-XHu0KD1s9egXf_yN5Bc1s-6WaSN-3uRbfgY1ME5dNlg/viewform?usp=header';

  isOver = false;

  clickMenu() {
    this.openMenu = !this.openMenu;
  }

  hello(mex: string) {
    alert('Hello ' + mex + '!');
  }


  abrirFormulario() {
    window.open(this.formulario, "_blank");
  }
}
