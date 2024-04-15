import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = ''; 
  constructor(private apiService: ApiService) {}
    handleSearchUser(searchTerm: any): void {
      console.log('Received search term in AppComponent:', searchTerm);
      this.searchTerm = searchTerm; // Update searchTerm with the entered username
    }
  }