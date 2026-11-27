import { Component, inject, signal, OnInit } from '@angular/core';
import type{ Pessoa } from '../../model/Pessoa';
import { PessoaService } from '../../services/pessoa-service';
import { FormInput } from '../form-input/form-input';
import { EditPessoa } from '../edit-pessoa/edit-pessoa';

@Component({
  imports: [FormInput, EditPessoa],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main  implements OnInit{
  novaPessoa: string = "";
  pessoas = signal<Pessoa[]>([]);

  private pessoaService = inject(PessoaService);
  pessoaSelecionada: number = 0;

  editar: number = 0;

  abrirEditar(p: Pessoa){
    this.editar = p.id;
  }
  pessoa = signal<Pessoa | null>(null);
  deletarPessoa(){
    this.pessoaService.deletar(this.pessoaSelecionada).subscribe({
      next: () => {
        this.buscarPessoa();
      }
    })
  }
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



}
