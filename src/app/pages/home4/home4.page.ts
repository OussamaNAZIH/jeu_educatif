import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
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
      const code = 'T' + this.part1 + 'G' + this.part2 + 'R';
      if (code === 'TIGER') {
        setTimeout(() => {
          const alertPlaceholder = document.getElementById('alert-placeholder');
          const alertBox = document.createElement('div');
          alertBox.className = 'alert-box';
          alertBox.innerText = 'Ceci est une alerte stylisée!';
          alertPlaceholder.appendChild(alertBox);
  
          // Optionnel: Supprimer l'alerte après un certain temps
          setTimeout(() => {
              alertBox.remove();
          }, 5000); // supprime l'alerte après 5 secondes
      }, 5000);
        this.navController.navigateForward('/home5', { queryParams: { score: this.score +10} });

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
  playLionSound() {
    // Vérifiez si la plateforme est prête pour jouer des sons
    this.platform.ready().then(() => {
      // Créez une nouvelle instance de l'objet Audio avec le chemin du fichier audio du lion
      const lionSound = new Audio('assets/tiger.mp3');

      // Jouez le son du lion
      lionSound.play();
    });
  }
}
