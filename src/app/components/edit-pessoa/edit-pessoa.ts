import { Component, inject, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../../services/pessoa-service';
import { Pessoa } from '../../model/Pessoa';
@Component({
  imports: [FormsModule],
  selector: 'app-edit-pessoa',
  styleUrl: './edit-pessoa.css',
  templateUrl: './edit-pessoa.html',
})
export class EditPessoa {
  @Input() nome: string = "";
  @Input() id: number = 0;
  @Input() buscar!: () => void;
  private pessoaService = inject(PessoaService)

  editarPessoa(){
    const dados = {
      id: this.id,
      nome: this.nome
    }
    console.log(dados)
    this.pessoaService.editar( dados as Pessoa).subscribe({
      next: () => {
        this.buscar();
      }

    })
    
  }

}
