import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "./../../services/productos.service";
import { Producto } from "./../../models/producto";
@Component({
  selector: "app-producto-single",
  templateUrl: "./producto-single.component.html",
  styleUrls: ["./producto-single.component.scss"],
})
export class ProductoSingleComponent implements OnInit {
  producto: Producto;
  productoID: number;

  constructor(
    private productoService: ProductosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productoID = +this.route.snapshot.paramMap.get("id");
    this.getProducto(this.productoID);
  }

  getProducto(id: number): void {
    this.productoService
      .getProductoById(id)
      .subscribe((producto) => (this.producto = producto));
  }
}
