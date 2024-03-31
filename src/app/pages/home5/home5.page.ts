import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home5.page.html',
  styleUrls: ['home5.page.scss'],
})
export class Home5Page {
  score: number = 0;
  part1: string = '';
  part2: string = '';
  part3: string = '';
  showPart1:boolean =false;
  showPart2:boolean =false;
  showPart3:boolean =false;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute,private platform: Platform) {
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
      const code = 'B' + this.part1+ this.part2 +'K';
      if (code === 'BOOK') {
        setTimeout(() => {
          this.navController.navigateForward('/home6', { queryParams: { score: this.score +10} });
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
    if (this.part1.length === 0 || this.part1 !== 'O') {
      this.part1 = 'O';
      this.showPart1 = true;
    }
    else
    if (this.part2.length === 0 || this.part2 !== 'O') {
      this.part2 = 'O';
      this.showPart2 = true;
      setTimeout(() => {
        this.navController.navigateForward('/home6', { queryParams: { score: this.score +10 } });
      }, 1000);
    }
    
  }
  playLionSound() {
    // Vérifiez si la plateforme est prête pour jouer des sons
    this.platform.ready().then(() => {
      // Créez une nouvelle instance de l'objet Audio avec le chemin du fichier audio du lion
      const lionSound = new Audio('assets/Book.mp3');

      // Jouez le son du lion
      lionSound.play();
    });
  }
}
