import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_QUESTION_API_URL } from 'src/app/app.contants';
@Injectable({
  providedIn: 'root',
})
export class QuesionService {
  constructor(private http: HttpClient) {}

  getOnAll():Observable<any>{
    return this.http.get(SERVER_QUESTION_API_URL+`questions`,{observe:'response'});
  }
  create(question):Observable<any>{
    return this.http.post(SERVER_QUESTION_API_URL + `question/create`,question,{observe:"response"});
  }
  delete(id,data):Observable<any>{
    return this.http.post(SERVER_QUESTION_API_URL + `question/delete/${id}`,{data},{observe:"response"});
  }
  update(data,id):Observable<any>{
    return this.http.put(
      SERVER_QUESTION_API_URL + `question/update/${id}`,data,
      {
        observe: 'response',
      }
    );
  }

  getAll(req): Observable<any> {
    return this.http.get(
      SERVER_QUESTION_API_URL +
        `question/query?page=` +
        req.current_page +
        '&limit=' +
        req.limit +
        '&search=' +
        req.search +
        '&sort=' +
        req.sort +
        '&reverse=' +
        req.reverse +
        '&level=' +
        req.level +
        '&theme=' +
        req.theme,
      {
        observe: 'response',
      }
    );
  }
}
