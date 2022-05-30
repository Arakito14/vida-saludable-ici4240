import { Component, OnInit } from '@angular/core';
declare var funcion_en:any;
@Component({
  selector: 'app-caja-de-comentarios',
  templateUrl: './caja-de-comentarios.component.html',
  styleUrls: ['./caja-de-comentarios.component.sass']
})
export class CajaDeComentariosComponent implements OnInit {

  constructor() { }

  j=0;
  boton=true;  
    ngOnInit(): void {
    }
    funcion1(number:number,name:string ,men:string,cla:string){
        funcion_en(number,name,men,cla,this.j,this.boton);
        if(number==3){
          if(this.boton==true){this.boton=false} else{this.boton=true}
      }
        this.j++; 
        
    }
}
