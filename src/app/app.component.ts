import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokeListComponent} from '../../libs/features/poke-list/poke-list.component';

@Component({
  selector: 'app-root',
  imports: [PokeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poke-battle';
}
