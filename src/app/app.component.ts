import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] =[

    {
      icon: 'earth-outline',
      name: 'Home', 
      redirecTo: '/tabs/tab1'
    },

    {
      icon: 'information-circle-outline',
      name: 'Informaciones', 
      redirecTo: '/tabs/tab2'
    },

    {
      icon: 'heart-outline',
      name: 'Acciones', 
      redirecTo: '/tabs/tab4'
    },
    
    {
      icon: 'person-outline', 
      name: 'Perfil', 
      redirecTo: '/tabs/tab3'
    }
  ]

}
