import { Component, inject, signal, OnInit } from '@angular/core';
import type{ Pessoa } from '../../model/Pessoa';
import { PessoaService } from '../../services/pessoa-service';
import { FormInput } from '../form-input/form-input';

@Component({
  imports: [FormInput],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main  implements OnInit{
  pessoas = signal<Pessoa[]>([]);

  private pessoaService = inject(PessoaService);

  buscarPessoa(){
    this.pessoaService.buscar().subscribe({
      next: (dados) => {
        console.log("Dados: ", dados);
        this.pessoas.set(dados);
      }
    })
  }
  ngOnInit(){
    this.buscarPessoa();
  }
  novaPessoa: string = "";


}
