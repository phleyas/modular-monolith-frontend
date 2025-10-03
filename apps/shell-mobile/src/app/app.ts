import { initFlowbite, initDropdowns } from 'flowbite';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonRouterOutlet, IonApp } from '@ionic/angular/standalone';

@Component({
  imports: [RouterModule, IonRouterOutlet, IonApp],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected title = 'shell-mobile';

  ngAfterViewInit() {
    initFlowbite();
    initDropdowns();
  }
}
