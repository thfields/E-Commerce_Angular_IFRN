import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCompradosComponent } from './produtos-comprados.component';

describe('ProdutosCompradosComponent', () => {
  let component: ProdutosCompradosComponent;
  let fixture: ComponentFixture<ProdutosCompradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosCompradosComponent]
    });
    fixture = TestBed.createComponent(ProdutosCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
