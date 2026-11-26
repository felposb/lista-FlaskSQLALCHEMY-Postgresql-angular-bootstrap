import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pessoa } from '../model/Pessoa';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private http = inject(HttpClient);

  buscar(){
    return this.http.get<Pessoa[]>(`http://localhost:5000/pessoa`)
  }
  cadastrar(nome: Pessoa){
    return this.http.post<Pessoa>(`http://localhost:5000/pessoa/criar`, nome)
  }
}
