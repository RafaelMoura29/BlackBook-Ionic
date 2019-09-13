import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLeitosPage } from './pagina-leitos.page';

describe('PaginaLeitosPage', () => {
  let component: PaginaLeitosPage;
  let fixture: ComponentFixture<PaginaLeitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaLeitosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLeitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
