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

  deletar(id: number){
    return this.http.delete<Pessoa>(`http://localhost:5000/pessoa/deletar/${id}`)
  }
  editar(pessoa: Pessoa){
    return this.http.put<Pessoa>(`http://localhost:5000/pessoa/editar/${pessoa.id}`, pessoa)
  }
}
