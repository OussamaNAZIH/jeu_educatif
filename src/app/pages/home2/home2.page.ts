import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isEmpty } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home2.page.html',
  styleUrls: ['home2.page.scss'],
})
export class Home2Page {
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
      const code = 'B' + this.part1 + 'N' + this.part2 +this.part3 + 'A';
      if (code === 'BANANA') {
        setTimeout(() => {
          this.navController.navigateForward('/home3', { queryParams: { score: this.score +10 } });
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
    if (this.part1.length === 0 || this.part1 !== 'A') {
      this.part1 = 'A';
      this.showPart1 = true;
    }
    else
    if (this.part2.length === 0 || this.part2 !== 'A') {
      this.part2 = 'A';
      this.showPart2 = true;}
      else
    if (this.part3.length === 0 || this.part3 !== 'N') {

      this.part2 = 'N';
      this.showPart3 = true;
      setTimeout(() => {
        this.navController.navigateForward('/home3', { queryParams: { score: this.score +10 } });
      }, 1000);
    }
    
  }
}
