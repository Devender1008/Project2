import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo1 } from './components/demo1/demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project2');
}
