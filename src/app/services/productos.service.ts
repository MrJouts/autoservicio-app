import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, find } from "rxjs/operators";

import { Categoria } from "./../models/categoria";
import { CATEGORIAS } from "./../mocks/mock-categorias";

import { Producto } from "./../models/producto";
import { PRODUCTOS } from "./../mocks/mock-productos";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  constructor() {}

  // Get Categorias
  getCategorias(): Observable<Categoria[]> {
    return of(CATEGORIAS);
  }

  // Get Productos
  getProductos(): Observable<Producto[]> {
    return of(PRODUCTOS);
  }

  // Get Producto By Id
  getProductoById(id: number): Observable<Producto> {
    return this.getProductos().pipe(
      map((productos) => productos.find((producto) => producto.id == id))
    );
  }
}
