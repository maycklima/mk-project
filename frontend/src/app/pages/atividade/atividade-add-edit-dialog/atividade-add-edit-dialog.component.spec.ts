import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeAddEditDialogComponent} from './atividade-add-edit-dialog.component';

describe('AtividadeAddEditDialogComponent', () => {
  let component: AtividadeAddEditDialogComponent;
  let fixture: ComponentFixture<AtividadeAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeAddEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtividadeAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
