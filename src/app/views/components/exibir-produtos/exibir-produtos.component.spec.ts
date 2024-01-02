import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirProdutosComponent } from './exibir-produtos.component';

describe('ExibirProdutosComponent', () => {
  let component: ExibirProdutosComponent;
  let fixture: ComponentFixture<ExibirProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibirProdutosComponent]
    });
    fixture = TestBed.createComponent(ExibirProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
