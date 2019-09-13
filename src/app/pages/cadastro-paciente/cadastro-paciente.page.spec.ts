import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacientePage } from './cadastro-paciente.page';

describe('CadastroPacientePage', () => {
  let component: CadastroPacientePage;
  let fixture: ComponentFixture<CadastroPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
