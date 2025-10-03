import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Dashboard } from '@frontend/air-quality';

@Component({
  selector: 'app-library-page',
  templateUrl: './dashboard-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, Dashboard],
})
export class DashboardPage {}
