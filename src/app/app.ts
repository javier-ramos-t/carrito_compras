import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './layout/topbar/topbar'
import { Footer } from './layout/footer/footer'
import { Spinner } from './shared/components/spinner/spinner';
import { Toast } from '@shared/components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, Footer, Spinner,Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal("Carrito")


}
