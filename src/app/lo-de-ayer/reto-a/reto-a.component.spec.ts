import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoAComponent } from './reto-a.component';

describe('RetoAComponent', () => {
  let component: RetoAComponent;
  let fixture: ComponentFixture<RetoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
