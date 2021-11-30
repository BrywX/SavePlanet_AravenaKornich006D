import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  sismos: Article[] = []
  sismos2: any;

  constructor(private climaService: ClimaService) { }

  ngOnInit() {
    this.climaService.getSismo().subscribe(resp=>{
    // console.log('Sismos',resp);
    // console.log(...resp.articles);

    // this.sismos.push(...resp);
    // this.sismos2=resp
    
    this.sismos=resp
    });
  }

}