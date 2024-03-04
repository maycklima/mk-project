import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenubarComponent } from './topmenubar.component';

describe('TopmenubarComponent', () => {
  let component: TopmenubarComponent;
  let fixture: ComponentFixture<TopmenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopmenubarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
