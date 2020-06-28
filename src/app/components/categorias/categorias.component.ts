import { Component, OnInit } from "@angular/core";

import { ProductosService } from "./../../services/productos.service";
import { Categoria } from "./../../models/categoria";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.scss"],
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[];

  constructor(private productoService: ProductosService) {}

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(): void {
    this.productoService
      .getCategorias()
      .subscribe((categorias) => (this.categorias = categorias));
  }
}
