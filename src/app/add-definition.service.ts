import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AddDefinitionService {

  private baseUrl = 'http://localhost:62130/api/ocr/';

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }

  postImage(file: File): Observable<any> {
    const formData = new FormData();
    const url = this.baseUrl + 'textRecognition';
    formData.append('image', file, file.name);
    const httpOptions = {
      headers: {
       Authorization: `Bearer ${this.authService.getToken()}`
      }
    };

    return this.http.post(url, formData, httpOptions)
      .pipe(
        map((res) => {
          if (res) {
            return res;
          }
        })
      );
  }
}
