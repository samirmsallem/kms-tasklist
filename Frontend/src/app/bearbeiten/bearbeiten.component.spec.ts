import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearbeitenComponent } from './bearbeiten.component';

describe('BearbeitenComponent', () => {
  let component: BearbeitenComponent;
  let fixture: ComponentFixture<BearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearbeitenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
