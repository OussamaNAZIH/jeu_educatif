import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isEmpty } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home6.page.html',
  styleUrls: ['home6.page.scss'],
})
export class Home6Page {
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
      const code = 'C' + this.part1 + this.part2 ;
      if (code === 'CAR') {
        setTimeout(() => {
          this.navController.navigateForward('/home7', { queryParams: { score: this.score +10 } });
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
    if (this.part1.length === 0 || this.part1 !== 'A') {
      this.part1 = 'A';
      this.showPart1 = true;
    }
    else
    if (this.part2.length === 0 || this.part2 !== 'R') {
      this.part2 = 'R';
      this.showPart2 = true;
      setTimeout(() => {
        this.navController.navigateForward('/home7', { queryParams: { score: this.score +10 } });
      }, 1000);
    }
    
  }
}
