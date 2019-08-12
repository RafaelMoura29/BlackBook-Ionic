import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresEntradaSaidaPage } from './indicadores-entrada-saida.page';

describe('IndicadoresEntradaSaidaPage', () => {
  let component: IndicadoresEntradaSaidaPage;
  let fixture: ComponentFixture<IndicadoresEntradaSaidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadoresEntradaSaidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadoresEntradaSaidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
