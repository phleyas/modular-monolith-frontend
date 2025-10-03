import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RepositoriesTable } from "@frontend/repositories";

@Component({
  selector: 'app-trending-repositories-page',
  templateUrl: './trending-repositories-page.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, RepositoriesTable],
})
export class TrendingRepositoriesPageComponent {}
