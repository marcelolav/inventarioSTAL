export interface Product {
  idproductos: number;
  codigobarra: string;
  nombreproducto: string;
  descripcion: string;
  precioventa: number;
  precioventausd: number;
  preciocompra: number;
  preciocomprausd: number;
  existencia: number;
  minimo: number;
  rubroid: string;
  fotoproducto: string;
  rubro: Rubro;
}
export interface Rubro {
  idrubros: string;
  nombrerubro: string;
}
