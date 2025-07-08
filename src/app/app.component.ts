import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { GridprincipalComponent } from "./gridprincipal/gridprincipal.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, GridprincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HatoApp';
}
