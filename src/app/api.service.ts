import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  // getData(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }
  // postData(data: any): Observable<any> {
  //   return this.http.post(this.apiUrl, data);
  // }

  getPosts(): Observable<any[]> { // Define the getPosts method
    return this.httpClient.get<any[]>(this.url);
  }
}
