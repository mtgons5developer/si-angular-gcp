import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsModalComponent } from './applicants-modal.component';

describe('ApplicantsModalComponent', () => {
  let component: ApplicantsModalComponent;
  let fixture: ComponentFixture<ApplicantsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicantsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
