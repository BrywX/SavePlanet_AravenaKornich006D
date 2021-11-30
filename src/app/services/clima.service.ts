import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Article, Sismos } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  getSismo()
  {
    return this.http.get<Article[]>
    ('https://api-sismologia-chile.herokuapp.com');
  }

}
