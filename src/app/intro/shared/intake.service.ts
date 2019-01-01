import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class IntakeService {

  constructor(private http: HttpClient) { }

  send(payLoad: any) {
    return this.http.post('api/intakes', payLoad)
      .pipe(
        catchError(err => of(console.log(err)))
      );
  }
}
