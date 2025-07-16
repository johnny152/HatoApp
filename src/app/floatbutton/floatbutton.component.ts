import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMiniFabButton} from '@angular/material/button';
import { MatFabButton } from '@angular/material/button';


@Component({
  selector: 'app-floatbutton',
  imports: [ CommonModule, MatMiniFabButton, MatFabButton],
  templateUrl: './floatbutton.component.html',
  styleUrl: './floatbutton.component.css'
})
export class FloatbuttonComponent {

    public openMenu: boolean = false;
  isOver = false;

  clickMenu(){
    this.openMenu = !this.openMenu;
  }

  hello(mex: string){
      alert('Hello '+mex+'!' );
  }
}
