import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Clima } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  url='http://api.weatherapi.com/v1/current.json?key=4f7fcb36acf1423d909222615212710&'

  getTopHeadLines(param)
  {
    return this.http.get<Clima>(this.url+`q=${param}&aqi=no`);
  }

}
