import { Component, inject, OnInit,Input } from '@angular/core';
import { visitAll } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Lista_usuarios,Mensaje,Usuario,UsuarioService } from '../../services/usuario.service';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { FormBuilder,FormGroup ,Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import { Employee } from 'src/app/models/employee';
import { getLocalePluralCase } from '@angular/common';
import * as CryptoJS from 'crypto-js';


declare var encriptar:any;
declare var desencriptar:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public aFormGroup: FormGroup;
  encPass: string="";
  decPass: string="";
  textoEnc: string="";
  textoDec: string="";


constructor(private listausuarios:UsuarioService,private formBuilder: FormBuilder,private service_backend:EmployeeService) { 
  this.aFormGroup = this.formBuilder.group({
    recaptcha: ['', Validators.required]
  });
}
siteKey:string="6LeR2LsgAAAAAHVv7dKA91xlFuqittJOwhy1-xpH";
usuario_mostrar={name:"",clave:"",rut:"",rol:" user",contacto:""};
opcion_admin="off";
rol:string="visita";
usur:string="";
abrir:string="";
mensajes_pagina:Mensaje[]=[];
j=0;
editar="off";
usuarios:string[]=[];
user_final:string="";
mensaje_admin:string="";
usuarios_base:Employee[]=[]
empleado: Employee ={
  name: '',
  clave: '',
  rut: '',
  rol: '',
  contacto: ''
}
id_base='';
encriptador='';
sumbitted = false;

convertirTexto(conversion: string){
  if (conversion === 'encriptar'){
    this.textoEnc = CryptoJS.AES.encrypt(this.textoEnc.trim(), this.encPass.trim()).toString();
    this.textoDec = CryptoJS.AES.decrypt(this.textoDec.trim(), this.decPass.trim()).toString(CryptoJS.enc.Utf8);
  }

}

  ngOnInit(): void {
      this.usur=this.listausuarios.ac_userGet;
      
      this.convertirTexto;

      this.service_backend.getEmployees()
      .subscribe({
        next: (data) => {
          this.usuarios_base= data;
         // console.log(data);
        },
        error: (e) => console.error(e)
      });

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

  Crearuser(): void{
    /**name?:string ,cla?:string
   this.abrir="v_crear_usuario";
   this.rol="";
    if(name!=null && cla!=null && name! && cla!){
      let  usuario:Usuario= new Usuario();
      usuario.crearUser(name,cla,"usuario");
      this.listausuarios.lista_users_set=usuario;
      this.abrir="";
      this.rol="visita"; */
      const data = {
        name:this.empleado.name,
        clave: this.empleado.clave,
        rut:this.empleado.rut,
        rol:this.empleado.rol,
        contacto:this.empleado.contacto
      }
      this.service_backend.createEmployee(data)
        .subscribe({
          next: (res) => {
            console.log(res[1])
            console.log(res);
            this.sumbitted = true;
          },
          error: (e) => console.error(e)
        });
    }

    nuevoUsuario(): void {
      this.sumbitted = false
      this.usuario_mostrar = {
        name: '',
        clave: '',
        rut: '',
        rol: '',
        contacto: '',
      };
    }

 

  iniciar_sesion(name:string ,cla:string){
    let  usuario:Usuario=new Usuario();
    let aux:Employee[]= [];

    for(let i=0;i<this.usuarios_base.length;i++){
      console.log(this.usuarios_base[i].name,name,this.usuarios_base[i].name===name,);
        if(this.usuarios_base[i].name===name){
          this.id_base=this.usuarios_base[i]._id!;
          usuario.crearUser(this.usuarios_base[i].name!,this.usuarios_base[i].clave!,this.usuarios_base[i].rol!);
          usuario.rut_set=this.usuarios_base[i].rut!;
          usuario.numero_set=this.usuarios_base[i].contacto!;
        }
    };
      
      console.log(usuario);


    if(usuario!=null && usuario?.clave_user===cla && usuario.id_user!=='admin' && usuario.rol_user==="usuario")
    {
      this.rol='user';
      this.usur=usuario.id_user;
      this.listausuarios.ac_userSet=usuario.id_user;
      this.usuario_mostrar={name:usuario.name_get,clave:usuario.clave_user,rut:usuario.rut_get,rol:"usuario",contacto:usuario.numero_get};
    }
    else if(usuario?.clave_user===cla && usuario.rol_user==='administrador'){
      this.rol='admin';
      this.usur=usuario.id_user;
      this.listausuarios.ac_userSet=usuario.id_user;
    }
    else{
      console.log("user no encontrado");
    }
  }


  logOut(){
    this.rol="visita";
    this.listausuarios.ac_userSet="visita";
    this.editar="off"
    this.opcion_admin="off"
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
      if(this.abrir==="v_crear_usuario" && this.rol===""){
        this.rol="visita";
        this.listausuarios.ac_userSet="visita";
        this.abrir="";
      }
      //else if(){

     // }
          
  }

//Funciones de administrador
admin_crear(){
  this.opcion_admin="crear";
}

/**crear_useradmin(name:string,pass:string,rol:string,numero:number){
  this.service_backend.createEmployee({name:name,clave:pass,rut:"",rol:"usuario",contacto:numero});
} */  

admin_editar(){
  this.opcion_admin="editar";
}

admin_eliminar(){
  this.opcion_admin="eliminar";
}

// Funciones user

EliminarCuenta(){
  if(this.usuario_mostrar.name!==""){
    this.listausuarios.eliminar_user( this.usuario_mostrar.name);
    this.rol='visita';
    this.listausuarios.ac_userSet='visita';
    this.service_backend.deleteEmployee('');
  }
    
}



}