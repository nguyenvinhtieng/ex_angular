import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiServer: string = "";
  constructor(private  readonly http: HttpClient) {
    this.apiServer = environment.config.apiUrl;
  }

  get( path: string, params: any | HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.apiServer}${path}`, {params});
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.http.post(`${this.apiServer}${path}`, body);
  }

  postFormData(path: string, body: any = {}): Observable<any> {
    const MultipartHeaders: HttpHeaders = new HttpHeaders({
      Accept: 'application/json'
    });
    return this.http.post<any>(`${this.apiServer}${path}`, body,
      { headers : MultipartHeaders }
    );
  }
  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(`${this.apiServer}${path}`, body);
  }
  putFormData(path: string, body: any = {}): Observable<any> {
    const MultipartHeaders: HttpHeaders = new HttpHeaders({
      Accept: 'application/json'
    });
    return this.http.put<any>(`${this.apiServer}${path}`, body,
      { headers : MultipartHeaders }
    );
  }

  delete(path: string, params: any | HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(`${this.apiServer}${path}`, {params});
  }

}
