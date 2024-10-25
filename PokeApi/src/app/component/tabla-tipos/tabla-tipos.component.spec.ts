import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTiposComponent } from './tabla-tipos.component';

describe('TablaTiposComponent', () => {
  let component: TablaTiposComponent;
  let fixture: ComponentFixture<TablaTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaTiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
