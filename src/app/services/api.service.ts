import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`).pipe(
      catchError(error => {
        console.error('Error fetching user data:', error);
        return throwError(error);
      })
    );
  }

  getRepos(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`).pipe(
      catchError(error => {
        console.error('Error fetching user repositories:', error);
        return throwError(error);
      })
    );
  }
}
