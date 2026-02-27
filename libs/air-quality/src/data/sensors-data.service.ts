import { inject, Injectable } from '@angular/core';
import { SensorDTO, SensorsService } from '@frontend/open-api';
import { Observable, map, shareReplay, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SensorsDataService {
  private sensorsService = inject(SensorsService);
  private cache = new Map<number, Observable<SensorDTO[]>>();

  getSensors(locationId: number): Observable<SensorDTO[]> {
    if (!this.cache.has(locationId)) {
      const obs$ = this.sensorsService.getSensors(locationId).pipe(
        map(response => response.sensors ?? []),
        shareReplay(1)
      );
      this.cache.set(locationId, obs$);
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.cache.get(locationId)!;
  }

  getSensorsAsync(locationId: number): Promise<SensorDTO[]> {
    return firstValueFrom(this.getSensors(locationId));
  }

  clearCache() {
    this.cache.clear();
  }
}
