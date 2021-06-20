import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  SERVER_AUTH_API_URL,
  SERVER_QUESTION_API_URL,
} from '../../app.contants';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private http: HttpClient) {}


}
