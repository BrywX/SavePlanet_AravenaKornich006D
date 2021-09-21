import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(public alertController: AlertController) {}

  ngOnInit(){
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'clase-usuario',
      header: 'Registro Usuario',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre Completo'
        },
        {
          name: 'pais',
          type: 'text',
          placeholder: 'Pais'
        },
 
        {
          name: 'cumple',
          type: 'date',
          min: '1980-01-01',
          max: '2020-01-01',
          placeholder: 'Fecha de Nacimiento'
        },
        {
          name: 'mail',
          type: 'text',
          placeholder: 'Email',
          
        },
        {
          name: 'nombreU',
          type: 'text',
          placeholder: 'Nombre de Usuario'
        },
        {
          name: 'clave',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 9,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Ok');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

}