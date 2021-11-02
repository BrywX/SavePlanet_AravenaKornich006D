import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';
import { Clima } from '../interfaces/interfaces';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  clima: Clima
  param: String

  constructor(private climaService: ClimaService) { }

  ngOnInit() {
  }

  traerClima(){
    this.climaService.getTopHeadLines(this.param).subscribe(resp=>{
      this.clima=resp
    });
  }

}
