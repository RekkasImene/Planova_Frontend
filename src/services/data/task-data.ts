import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskData {
  constructor(
    private http:HttpClient
  ) {
  }
  getTasks(){
    return this.http.get('http://localhost:8080/tasks');
  }
  getTask(id: number){
    return this.http.get(`http://localhost:8080/tasks/${id}`);
  }
}
