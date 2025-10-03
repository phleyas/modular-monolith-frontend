import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonRouterOutlet, IonApp } from '@ionic/angular/standalone';

@Component({
  imports: [RouterModule, IonRouterOutlet, IonApp],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shell-mobile';
}
