import { Component } from '@angular/core';
import { GridprincipalComponent } from "../gridprincipal/gridprincipal.component";
import { CommonModule } from '@angular/common';
import { FloatbuttonComponent } from '../floatbutton/floatbutton.component';

@Component({
  selector: 'app-loader',
  imports: [GridprincipalComponent, CommonModule,  FloatbuttonComponent],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  showChild = false;
  showParent = true;


  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.showParent= false;
     setTimeout(() => {
       this.showChild= true;
     }, 500);
    }, 3000);
  }
}
