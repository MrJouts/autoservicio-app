import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Categoria } from "./../models/categoria";
import { CATEGORIAS } from "./../mocks/mock-categorias";

import { Producto } from "./../models/producto";
import { PRODUCTOS } from "./../mocks/mock-productos";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  constructor() {}

  // Get Formats
  getCategorias(): Observable<Categoria[]> {
    return of(CATEGORIAS);
  }

  // Get Formats
  getProductos(): Observable<Producto[]> {
    return of(PRODUCTOS);
  }
}
