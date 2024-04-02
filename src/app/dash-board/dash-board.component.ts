// dash-board.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Assuming you have an AuthService to manage authentication and user data

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  userData: any; // Property to store user data

  constructor(private authService: AuthService) {} // Inject AuthService

  ngOnInit(): void {
    // Call a method to fetch user data when the component initializes
    this.fetchUserData();
  }

  fetchUserData(): void {
    // Example: Fetch user data from AuthService
    this.userData = this.authService.getUserData();
  }
}
