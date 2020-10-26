import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private data: any;

  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`assets/translations/${navigator.language}.json`).subscribe(
        (data) => {
          this.data = data;
          resolve(true);
        },
        (error) => {
          console.error('Error al recuperar las traducciones: ' + error);
          reject(true);
        }
      );
    });
  }

  getTranslate(words: string): string {
    const key = words.split('.');
    switch (key.length) {
      case 1:
        return this.data[key[0]];
      case 2:
        return this.data[key[0]][key[1]];
      default:
        break;
    }
  }
}
