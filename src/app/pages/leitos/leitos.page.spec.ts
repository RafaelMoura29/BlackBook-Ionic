import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitosPage } from './leitos.page';

describe('LeitosPage', () => {
  let component: LeitosPage;
  let fixture: ComponentFixture<LeitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
