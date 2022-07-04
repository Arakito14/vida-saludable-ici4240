import { Component, OnInit } from '@angular/core';
import { UsuarioService ,Mensaje, Usuario} from 'src/app/services/usuario.service';
declare var botones_act_Desac:any;
@Component({
  selector: 'app-caja-de-comentarios',
  templateUrl: './caja-de-comentarios.component.html',
  styleUrls: ['./caja-de-comentarios.component.sass']
})
export class CajaDeComentariosComponent implements OnInit {

  constructor(private listausuarios:UsuarioService) { }
  rol:string="visita";
  usur:string="";
  abrir:string="";
  mensajes_pagina:Mensaje[]=[];
  j=0;
  editar="off";
  usuarios:string[]=[];
  user_final:string="";
  mensaje_admin:string="";  

    ngOnInit(): void {
      this.usur=this.listausuarios.ac_userGet;
      if(this.usur==="admin" || this.listausuarios.get_Usuario(this.usur).rol_user==="user" ){
        this.rol=this.listausuarios.get_Usuario(this.usur).rol_user;
      }
      
      this.mensajes_pagina=this.listausuarios.get_mensajes_paginas(window.location.pathname);
    }
    Eliminarcomentarios_user(){
      botones_act_Desac();  
    }

    Eliminar_comen_unico(id:string,id_persona:string){
      if(id_persona===this.usur){
        this.listausuarios.Eliminar_comentario(window.location.pathname,id);
      }
     else if("admin"===this.usur &&this.rol==="admin"){
        this.listausuarios.Eliminar_comentario(window.location.pathname,id);
     }
    }

    enviarMensaje(mens:string){
      let  usuario:Usuario;
      let date:Date=new Date();
      usuario=this.listausuarios.get_Usuario(this.usur);

      usuario.mensajes_set={id:mens+usuario.lenght_mapa_mensajes,user:usuario.id_user,mensaje:mens,pagina:window.location.pathname,posicion:date};
      this.listausuarios.mensajes_Set=usuario.mensajes_user.get(mens+(usuario.lenght_mapa_mensajes-1))!;
      this.mensajes_pagina=this.listausuarios.get_mensajes_paginas(window.location.pathname);
    }
    editar_boton(){
      if(this.editar!="on")
      {
        this.editar="on"
        this.usuarios=this.listausuarios.obtener_users();
      }
      else {
        this.editar="off";
      }
    }
    userr(dato:string){
      this.user_final=dato;
    }
    edita_coment_user(id_inicio:string,id_mensa:string){
      if(id_inicio!=this.user_final && id_inicio!==null && this.user_final!==null && this.user_final.length>0 ){
        this.listausuarios.cambiar_dominio(id_inicio!,this.user_final!,id_mensa!);
      }
      else{
        console.log("Tiene que ser un user distinto");
      }
      
    }
    cambio_text(dato:string){
      this.mensaje_admin=dato;
    }

    edita_coment_texto(id_inicio:string,id_mensa:string){
      if(this.mensaje_admin!=""){
        this.listausuarios.cambiar_mensaje(id_inicio,id_mensa,this.mensaje_admin);
      }
        else{
          console.log("agegue algo a la pestaña mensajes");
        }
      }
}
