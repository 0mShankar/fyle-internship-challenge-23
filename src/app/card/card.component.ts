import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  defaultUsername: string = 'LoveBabbar'; // Default username
  searchTerm: string = this.defaultUsername; // Initial searchTerm is set to defaultUsername
  userData: any = {}; // Define a variable to store user data
  userRepos: any = {};
  
  errorMessage: string = '';
  
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number[] = [];
  searchHistory: string[] = [];
  constructor(
    private apiService: ApiService,
    private dataSharingService: DataSharingService
  ) { }

  ngOnInit() {
    this.dataSharingService.currentSearchTerm.subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      console.log('Search Term in CardComponent:', this.searchTerm);
      if (!this.searchTerm) {
        this.searchTerm = 'LoveBabbar'; // Set 'LoveBabbar' as default username if searchTerm is empty
      }
      console.log('Input searchTerm:', this.searchTerm); // Log the input searchTerm
      this.fetchUserData(this.searchTerm); // Fetch user data based on searchTerm
      this.fetchUserRepos(this.searchTerm)
    });
  }

  fetchUserData(username: string) {
    this.apiService.getUser(username).subscribe(
      (data: any) => {
        console.log('API Response:', data);
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  fetchUserRepos(username: string) {
    this.apiService.getRepos(username).subscribe(
      (data: any) => {
        console.log('API Response (Repos):', data);
        this.userRepos = data;
      },
      (error) => {
        console.error('Error fetching user repositories:', error);
      }
    );
  }

  calculateTotalPages() {
    const totalItems = this.userRepos.length;
    this.totalPages = Array(Math.ceil(totalItems / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    // Adjust logic to display repositories based on the currentPage and itemsPerPage
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // Adjust logic to display repositories based on the currentPage and itemsPerPage
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
      // Adjust logic to display repositories based on the currentPage and itemsPerPage
    }
  }
  getCurrentPageRepos(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.userRepos.slice(startIndex, endIndex);
  }
}
  

