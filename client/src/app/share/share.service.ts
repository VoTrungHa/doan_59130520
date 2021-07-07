import { Injectable } from '@angular/core';
import { SERVER_AUTH_API_URL, SERVER_QUESTION_API_URL } from '../app.contants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShareService {
  private chooseQuestion = new Subject<boolean>();
  chooseQuestion$ = this.chooseQuestion.asObservable();
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'Accept-Encoding': '*',
  });

  checkchoose(islogin: boolean) {
    this.chooseQuestion.next(islogin);
  }

  upload(data): Observable<any> {
    // file txt
    return this.http.post(SERVER_QUESTION_API_URL + `upload/question`, data, {
      reportProgress: true,
      observe: 'response',
    });
  }

  getAllAccountGv(): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `getAccountGv`, {
      observe: 'response',
    });
  }

  uploadImage(data): Observable<any> {
    return this.http.post(SERVER_AUTH_API_URL + `upload/image`, data, {
      reportProgress: true,
      observe: 'response',
    });
  }

  getDataToServer(data): Observable<any> {
    return this.http.post(
      SERVER_QUESTION_API_URL + `downloadFile/question`,
      data,
      {
        observe: 'response',
      }
    );
  }

  dowDataToServer(data, filename): Observable<any> {
    return this.http.post(
      SERVER_QUESTION_API_URL + `downloadFile/all`,
      { data, filename: filename },
      {
        observe: 'response',
      }
    );
  }

  uploadFileXml(data): Observable<any> {
    return this.http.post(
      SERVER_QUESTION_API_URL + `uploadXml/question`,
      data,
      {
        reportProgress: true,
        observe: 'response',
        // responseType: 'blob',
      }
    );
  }

  // create lop
  createLop(data): Observable<any> {
    // console.log(data);
    return this.http.post(
      SERVER_AUTH_API_URL + 'lop/create',
      { name: data },
      { observe: 'response' }
    );
  }
  getAll(): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `lop`, { observe: 'response' });
  }

  // create ky thi.
  createKyThi(data): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `create/kythi`,
      { data },
      { observe: 'response' }
    );
  }

  getAllKyThi(): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `kythi`, {
      observe: 'response',
    });
  }
  // chu de
  createTheme(name): Observable<any> {
    return this.http.post(
      SERVER_AUTH_API_URL + `chude/createTheme`,
      { name },
      {
        observe: 'response',
      }
    );
  }
  getAllTheme(): Observable<any> {
    return this.http.get(SERVER_AUTH_API_URL + `chude/getAllTheme`, {
      observe: 'response',
    });
  }
}
