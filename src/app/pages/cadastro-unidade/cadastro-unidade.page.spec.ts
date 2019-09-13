import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidadePage } from './cadastro-unidade.page';

describe('CadastroUnidadePage', () => {
  let component: CadastroUnidadePage;
  let fixture: ComponentFixture<CadastroUnidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUnidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUnidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
