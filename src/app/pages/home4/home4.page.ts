import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isEmpty } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home4.page.html',
  styleUrls: ['home4.page.scss'],
})
export class Home4Page {
  score: number = 0;
  part1: string = '';
  part2: string = '';
  part3: string = '';
  showPart1:boolean =false;
  showPart2:boolean =false;
  showPart3:boolean =false;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute) {
    // Récupérez le score passé en paramètre de l'URL
    this.activatedRoute.queryParams.subscribe(params => {
      this.score = params['score'];
    });
  }
  appendKey(key: string) {
    if (!this.part1) {
      this.part1 = key;
    } else if (!this.part2) {
      this.part2 = key;
      const code = 'T' + this.part1 + 'G' + this.part2 + 'R';
      if (code === 'TIGER') {
        setTimeout(() => {
          this.navController.navigateForward('/home5', { queryParams: { score: this.score +10} });
        }, 1000);
      } else {
        // Code incorrect, réinitialiser les parties variables du champ de saisie
        setTimeout(() => {
          this.part1 = '';
          this.part2 = '';
        }, 500);
      }
    }
  }
  
  indice() {
    // Réduit le score de 10
    this.score -= 10; 
    
    // Met à jour la partie 2 avec 'I' si nécessaire
    if (this.part1.length === 0 || this.part1 !== 'I') {
      this.part1 = 'I';
      this.showPart1 = true;
    }
    else
    if (this.part2.length === 0 || this.part2 !== 'E') {
      this.part2 = 'E';
      this.showPart2 = true;
      setTimeout(() => {
        this.navController.navigateForward('/home5', { queryParams: { score: this.score +10} });
      }, 1000);
    }
    
  }
}
