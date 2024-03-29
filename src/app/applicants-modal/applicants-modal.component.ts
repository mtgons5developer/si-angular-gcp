import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants-modal',
  templateUrl: './applicants-modal.component.html',
  styleUrls: ['./applicants-modal.component.css']
})
export class ApplicantsModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    // Logic to close the modal
  }

  beginLooking(): void {
    // Logic when the "Begin looking" button is clicked
  }

}
