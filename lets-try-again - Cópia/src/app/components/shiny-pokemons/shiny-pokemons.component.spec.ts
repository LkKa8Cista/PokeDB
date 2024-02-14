import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyPokemonsComponent } from './shiny-pokemons.component';

describe('ShinyPokemonsComponent', () => {
  let component: ShinyPokemonsComponent;
  let fixture: ComponentFixture<ShinyPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShinyPokemonsComponent]
    });
    fixture = TestBed.createComponent(ShinyPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
