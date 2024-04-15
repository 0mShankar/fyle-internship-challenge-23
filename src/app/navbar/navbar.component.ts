import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private dataSharingService: DataSharingService) { }

  onSubmit(searchInput: string): void {
    const searchTerm = searchInput.replace(/\s/g, ''); // Remove all spaces from searchInput
    console.log(searchTerm); 
    this.dataSharingService.changeSearchTerm(searchTerm);
  }
}
