import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListComponentComponent } from './pokemons-list-component.component';

describe('PokemonsListComponentComponent', () => {
  let component: PokemonsListComponentComponent;
  let fixture: ComponentFixture<PokemonsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonsListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
