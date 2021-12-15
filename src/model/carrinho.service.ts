import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private adicionados: Produto[];

  constructor() {
    this.adicionados = [];
  }

  /** coloca o produto na lista de  adicionados caso ele não esteja (pesquise pelo id) */
  adicionar(prod: Produto) {
    console.log(prod);
  }
}
