import { Producto } from "../models/producto";

export const PRODUCTOS: Producto[] = [
  {
    id: 1,
    name: "Simple",
    descripcion: "descripcon...",
    portada: "simple.png",
    imagenes: ["especial.png", "banado.png", "tresgustos.png"],
  },
  {
    id: 2,
    name: "Especial",
    descripcion: "descripcon...",
    portada: "especial.png",
    imagenes: ["simple.png", "banado.png", "tresgustos.png"],
  },
  {
    id: 3,
    name: "Bañado",
    descripcion: "descripcon...",
    portada: "banado.png",
    imagenes: ["especial.png", "simple.png", "tresgustos.png"],
  },
  {
    id: 4,
    name: "Tres gustos",
    descripcion: "descripcon...",
    portada: "tresgustos.png",
    imagenes: ["especial.png", "banado.png", "simple.png"],
  },
];
