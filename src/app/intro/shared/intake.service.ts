import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, tap, mergeMap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable()
export class IntakeService {

  constructor(private http: HttpClient) { }

  postIntake(intakePayLoad: any) {
    // Fire the call after 3 seconds to simulate running operation and progress bar
    // demo purposes only.
    return of({}).pipe(
      delay(3000),
      mergeMap(() => this.http.post('api/intakes', intakePayLoad))
    );
  }
}
