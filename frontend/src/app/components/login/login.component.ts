import { Component, inject, OnInit } from '@angular/core';
import { visitAll } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Lista_usuarios,Mensaje,Usuario,UsuarioService } from '../../services/usuario.service';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { FormBuilder,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
public aFormGroup: FormGroup;

constructor(private listausuarios:UsuarioService,private formBuilder: FormBuilder) { 
  this.aFormGroup = this.formBuilder.group({
    recaptcha: ['', Validators.required]
  });
}
siteKey:string="6LeR2LsgAAAAAHVv7dKA91xlFuqittJOwhy1-xpH";

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
      if(this.usur!=="visita"){
        this.rol="user";
      }
      if(this.listausuarios.get_mensajes_paginas(window.location.pathname)?.length>0){
        this.mensajes_pagina=this.listausuarios.get_mensajes_paginas(window.location.pathname);
      }
        if(this.listausuarios.obtener_users().length>0){
          this.usuarios=this.listausuarios.obtener_users();
        }

  }

  Crearuser(name?:string ,cla?:string){
   this.abrir="v_crear_usuario";
   this.rol="";
    if(name!=null && cla!=null && name! && cla!){
      let  usuario:Usuario= new Usuario();
      usuario.crearUser(name,cla,"user");
      this.listausuarios.lista_users_set=usuario;
      console.log(usuario.id_user,usuario.clave_user,this.listausuarios.lista_users_get.lenght);
      this.abrir="";
      this.rol="visita";
    }
  }

  Eliminar_comen_unico(id:string,id_persona:string){
    if(id_persona===this.usur){
      this.listausuarios.Eliminar_comentario(window.location.pathname,id);
    }
   else if("admin"===this.usur &&this.rol==="admin"){
      this.listausuarios.Eliminar_comentario(window.location.pathname,id);
   }
  }

  iniciar_sesion(name:string ,cla:string){
    let  usuario:Usuario;
    usuario=this.listausuarios.get_Usuario(name);
    console.log(usuario.id_user,usuario.clave_user,usuario.rol_user);
    if(usuario!=null && usuario?.clave_user===cla &&usuario.id_user!=='admin')
    {
      this.rol='user';
      this.usur=usuario.id_user;
      this.listausuarios.ac_userSet=usuario.id_user;
    }
    else if(usuario?.clave_user===cla && usuario.id_user==='admin'){
      this.rol='admin';
      this.usur=usuario.id_user;
      this.listausuarios.ac_userSet=usuario.id_user;
      console.log("ayuda");
    }
    else{
      console.log("user no encontrado");
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

  logOut(){
    this.rol="visita";
    this.listausuarios.ac_userSet="visita";
    this.editar="off"
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
    if(id_inicio!==id_mensa){this.listausuarios.cambiar_dominio(id_inicio,this.user_final,id_mensa);}
    else{
      console.log("Tiene que ser un user distinto");
    }
    
  }
  cambio_text(dato:string){
    this.mensaje_admin=dato;
  }

  edita_coment_texto(id_inicio:string,id_mensa:string){
      this.listausuarios.cambiar_mensaje(id_inicio,id_mensa,this.mensaje_admin);
  }
  Atras(){
    this.rol="visita";
    this.listausuarios.ac_userSet="visita";
    this.abrir="";
  }
}