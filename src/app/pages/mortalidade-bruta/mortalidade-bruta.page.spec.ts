import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortalidadeBrutaPage } from './mortalidade-bruta.page';

describe('MortalidadeBrutaPage', () => {
  let component: MortalidadeBrutaPage;
  let fixture: ComponentFixture<MortalidadeBrutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortalidadeBrutaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortalidadeBrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
