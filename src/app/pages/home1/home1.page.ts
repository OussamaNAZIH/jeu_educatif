import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home1.page.html',
  styleUrls: ['home1.page.scss'],
})
export class Home1Page {
  score: number = 40;
  part2: string = '';
  part4: string = '';
  showPart2:boolean =false;
  showPart4:boolean =false;


 

  constructor(private navController: NavController, private platform: Platform) {}

  appendKey(key: string) {
    if (!this.part2) {
      this.part2 = key;
    } else if (!this.part4) {
      this.part4 = key;
      const code = 'L' + this.part2 + 'O' + this.part4;
      if (code === 'LION') {
        setTimeout(() => {
          this.navController.navigateForward('/home2', { queryParams: { score: this.score +10 } });
        }, 1000);
      } else {
        setTimeout(() => {
          this.part2 = '';
          this.part4 = ''; }, 500);

        
      }
    }
  }
 
  indice() {
    // Réduit le score de 10
    this.score -= 10; 
    
    // Met à jour la partie 2 avec 'I' si nécessaire
    if (this.part2.length === 0 || this.part2 !== 'I') {
      this.part2 = 'I';
      this.showPart2 = true;
    }
    else
    if (this.part4.length === 0 || this.part4 !== 'N') {
      this.part4 = 'N';
      this.showPart4 = true;
      setTimeout(() => {
        this.navController.navigateForward('/home2', { queryParams: { score: this.score +10 } });
      }, 1000);
    }
    
  }
  playLionSound() {
    // Vérifiez si la plateforme est prête pour jouer des sons
    this.platform.ready().then(() => {
      // Créez une nouvelle instance de l'objet Audio avec le chemin du fichier audio du lion
      const lionSound = new Audio('assets/lionSound.wav');

      // Jouez le son du lion
      lionSound.play();
    });
  }
}