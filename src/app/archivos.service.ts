import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class archivoService {
  constructor(private http: HttpClient) {}

  obtenerArchivos(): Observable<string[]> {
    return this.http.get<string[]>('assets/audios/audios.json');
  }
}
