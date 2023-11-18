import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawComponent } from './paw.component';

describe('PawComponent', () => {
  let component: PawComponent;
  let fixture: ComponentFixture<PawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
