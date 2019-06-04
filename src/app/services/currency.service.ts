import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private urlBase: string = "https://mindicador.cl/api";


  constructor(private http:HttpClient) { }

  getCurrency(){
    return this.http.get(this.urlBase).pipe(map(data => {
      let myarray:Array<any> = [];
      myarray.push(data['bitcoin']);
      myarray.push(data['uf']);
      myarray.push(data['dolar']);
      myarray.push(data['euro']);
      myarray.push(data['dolar_intercambio']);
      return myarray;
    }));
  }
  //metodo para traer la info


}
