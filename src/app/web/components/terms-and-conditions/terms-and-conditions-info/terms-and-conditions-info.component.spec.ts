import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsInfoComponent } from './terms-and-conditions-info.component';

describe('TermsAndConditionsInfoComponent', () => {
  let component: TermsAndConditionsInfoComponent;
  let fixture: ComponentFixture<TermsAndConditionsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsAndConditionsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndConditionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
