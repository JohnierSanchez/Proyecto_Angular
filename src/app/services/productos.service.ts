import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProductos } from '../interfaces/info-productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: InfoProductos[] = [];
  productoFiltrado: InfoProductos[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos() {

      this.http.get('https://proyecto-ventas-dfe44.firebaseio.com/productos_idx.json')
      .subscribe((resp: InfoProductos[]) => {
        this.producto = resp;
        this.cargando = false;
    });

  }

  getProducto( id: string){
    return this.http.get(`https://proyecto-ventas-dfe44.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string){
    this.productoFiltrado = this.producto.filter( product =>{

      return true;

    });

    console.log( this.productoFiltrado);

  }
}
