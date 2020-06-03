import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InfoProductos } from '../../interfaces/info-productos.interface';
import { InfoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: InfoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute, public pService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros =>{

        console.log(parametros['id']);

        this.pService.getProducto(parametros['id'])
          .subscribe( (producto: InfoDescripcion) => {
            
            this.id = parametros['id'];
            this.producto = producto;
            console.log(producto);
            
          });

      });
  }

}
