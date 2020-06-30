import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ProductoSingleComponent } from "./components/producto-single/producto-single.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: InicioComponent,
  },
  {
    path: "categorias",
    component: CategoriasComponent,
  },
  {
    path: "productos",
    component: ProductosComponent,
  },
  {
    path: "producto/:id",
    component: ProductoSingleComponent,
  },
  {
    path: "checkout",
    component: CheckoutComponent,
  },
  // Default redirection
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
