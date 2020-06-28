import { Component, OnInit } from "@angular/core";

import { ProductosService } from "./../../services/productos.service";
import { Producto } from "./../../models/producto";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.scss"],
})
export class ProductosComponent implements OnInit {
  productos: Producto[];

  constructor(private productoService: ProductosService) {}

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService
      .getProductos()
      .subscribe((productos) => (this.productos = productos));
  }
}
