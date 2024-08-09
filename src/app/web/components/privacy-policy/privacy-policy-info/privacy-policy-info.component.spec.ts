import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyInfoComponent } from './privacy-policy-info.component';

describe('PrivacyPolicyInfoComponent', () => {
  let component: PrivacyPolicyInfoComponent;
  let fixture: ComponentFixture<PrivacyPolicyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
