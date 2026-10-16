import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { Cours, ListeCours } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { DetailsCours } from './composants/details-cours/details-cours';

@Component({
  standalone: true,
  imports: [EnTete, ListeCours, DetailsCours, PiedPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-cours');
  coursSelectionne: Cours | null = null;

  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }
}