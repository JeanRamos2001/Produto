import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup; // Note o uso do operador "!" para indicar inicialização posterior
  produtoCadastrado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nomeProduto: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  cadastrarProduto() {
    if (this.cadastroForm.valid) {
      const nomeProduto = this.cadastroForm.get('nomeProduto')!.value;

      this.productService.addProduct(nomeProduto);
      this.produtoCadastrado = true;

      // Resetar o formulário após cadastrar
      this.cadastroForm.reset();
    }
  }

}
