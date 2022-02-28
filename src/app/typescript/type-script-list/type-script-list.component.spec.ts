import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScriptListComponent } from './type-script-list.component';

describe('TypeScriptListComponent', () => {
  let component: TypeScriptListComponent;
  let fixture: ComponentFixture<TypeScriptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScriptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeScriptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
