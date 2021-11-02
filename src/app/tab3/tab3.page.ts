import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(public alertController: AlertController,
    public navCtrl: NavController) {}

    ngOnInit() {
    }
  
    async salir(){
      const alert = await this.alertController.create({
        header: 'Salir',
        message: '¿Seguro que quieres salir?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              
            }
          }, {
            text: 'Si',
            handler: () => {
              localStorage.removeItem('ingresado');
              this.navCtrl.navigateRoot('login');
            }
          }
        ]
      });
  
      await alert.present();
    }
  
  }
  