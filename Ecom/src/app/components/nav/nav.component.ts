import { Component } from '@angular/core';
import { Routes,RouterModule,RouterOutlet, RouterLink } from '@angular/router';
import { NavInferiorComponent } from '../nav-inferior/nav-inferior.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


}


