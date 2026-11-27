import { Component, Input, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Pessoa } from '../../model/Pessoa';
import { PessoaService } from '../../services/pessoa-service';
@Component({
  imports: [FormsModule],
  selector: 'app-form-input',
  styleUrl: './form-input.css',
  templateUrl: './form-input.html',
})
export class FormInput {
  @Input() nome: string = "";

  private pessoaService = inject(PessoaService);
  @Input() buscar!: () => void;
  pessoa = signal<Pessoa | null>(null);




  cadastrar(){
    this.pessoaService.cadastrar({nome: this.nome} as Pessoa).subscribe({
      next: () => {
        this.buscar();
      }
    })
  }
}
