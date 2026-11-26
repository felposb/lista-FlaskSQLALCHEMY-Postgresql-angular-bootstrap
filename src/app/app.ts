import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { FormInput } from './components/form-input/form-input';
@Component({
  imports: [RouterOutlet, Main, Footer, Header, FormInput],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('to-do');
}
