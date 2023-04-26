import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent {

  // Cria a propriedade, variável "produto" que será a lista de produtos ou pode ser indefinida.
  produto: IProduto | undefined ;


  constructor(
    private produtosService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
    ){}


    //Pegar os parametros
    ngOnInit(): void {

      // vai trazer todos os parametros da rota
      const routeParams = this.route.snapshot.paramMap;

      //Para pegar o id do produto,"Number" => converte em "número"
      const produtoId = Number (routeParams.get("id"))

      //passar o id do produto,
    this.produto = this.produtosService.getOne(produtoId);


    }

}
