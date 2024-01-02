import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaProdutosComponent } from './pesquisa-produtos.component';

describe('PesquisaProdutosComponent', () => {
  let component: PesquisaProdutosComponent;
  let fixture: ComponentFixture<PesquisaProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaProdutosComponent]
    });
    fixture = TestBed.createComponent(PesquisaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
