import { Component } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { DetailCoursComponent } from './composants/detail-cours/detail-cours';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { Cours } from './composants/liste-cours/liste-cours';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnTete, ListeCoursComponent, DetailCoursComponent, PiedPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  coursSelectionne: Cours | null = null;

  onSelectionCours(cours: Cours) {
    this.coursSelectionne = cours;
  }
}