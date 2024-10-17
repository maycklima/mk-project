import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoAddEditDialogComponent } from './movimentacao-add-edit.component';

describe('MovimentacaoAddEditDialogComponent', () => {
  let component: MovimentacaoAddEditDialogComponent;
  let fixture: ComponentFixture<MovimentacaoAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentacaoAddEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimentacaoAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
