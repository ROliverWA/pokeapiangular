import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var results;
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();

  }

  getPokemon() {
    let gengar = this._http.get('https://pokeapi.co/api/v2/pokemon/gengar');
    gengar.subscribe(data => {
      console.log(data);
      let ability = data['abilities'][0]['ability']['url']      
      let able = this._http.get(ability);
      able.subscribe(able_data => {
        for(let i=0;i<able_data['pokemon'].length;i++) 
          console.log(able_data['pokemon'][i]['pokemon']['name']);
      })


    });



    
    
  };
}
