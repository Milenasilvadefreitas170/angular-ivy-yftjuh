import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../model/carrinho.service';
import { LojaService } from '../../model/loja.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  produtos: Produto[];

  constructor(private ls: LojaService, private cs: CarrinhoService) {
    this.produtos = [];
  }

  ngOnInit() {
    this.produtos = this.ls.obterProdutos();
  }

  adicionar(pr: Produto) {
    this.cs.adicionar(pr);
  }
}
