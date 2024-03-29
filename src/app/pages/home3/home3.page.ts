import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isEmpty } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home3.page.html',
  styleUrls: ['home3.page.scss'],
})
export class Home3Page {
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
      this.part2 = key;}
      
      else if (!this.part3) {
        this.part3 = key;
      const code = 'O' + this.part1 + 'A' + this.part2 + 'G' +this.part3 ;
      if (code === 'ORANGE') {
        setTimeout(() => {
          this.navController.navigateForward('/home4', { queryParams: { score: this.score +10 } });
        }, 1000);
      } else {
        // Code incorrect, réinitialiser les parties variables du champ de saisie
        setTimeout(() => {
          this.part1 = '';
          this.part2 = '';
          this.part3 = '';
        }, 500);
      }
    }
  }
  
  indice() {
    // Réduit le score de 10
    this.score -= 10; 
    
    // Met à jour la partie 2 avec 'I' si nécessaire
    if (this.part1.length === 0 || this.part1 !== 'R') {
      this.part1 = 'R';
      this.showPart1 = true;
    }
    else
    if (this.part2.length === 0 || this.part2 !== 'A') {
      this.part2 = 'A';
      this.showPart2 = true;}
      else
    if (this.part3.length === 0 || this.part3 !== 'E') {

      this.part3 = 'E';
      this.showPart3 = true;
      setTimeout(() => {
        this.navController.navigateForward('/home4', { queryParams: { score: this.score +10 } });
      }, 1000);
    }
    
  }
}
