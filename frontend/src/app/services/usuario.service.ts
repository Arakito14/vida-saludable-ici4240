import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Lista_usuarios{
  private mapa=new Map<string,Usuario>();

constructor(){
  let user:Usuario= new Usuario();
  this.mapa.set(user.id_user,user);
  user.crearUser("admin","admin","admin");
  this.mapa.set(user.id_user,user);
};

get lenght(){
  return this.mapa.size;
}
set setingresar(user:Usuario){
  this.mapa.set(user.id_user,user);
};

get enviarUsuarios(){
  return this.mapa!;
};

getUser(id:string){
  let user:Usuario=new Usuario();
  if(this.mapa.has(id)===true){
    user=this.mapa.get(id)!;
    return user;
  }
 else{
  return user;
 }
  
};
}




export class Usuario{
constructor(){
}
  private id:string="visita";
  private clave?:string|null;
   rol:string="visita";
  private mensajes=new Map<string,Mensaje>();

crearUser(id:string,clave:string,rol?:string){
this.id=id;
this.clave=clave;
this.rol=rol!;
}


get id_user(){
  return this.id;
};

get clave_user(){
  return this.clave;
};

get rol_user (){
  return this.rol;
};

get mensajes_user(){
return this.mensajes;
};

set mensajes_set(mensaje:Mensaje){
  this.mensajes.set(mensaje.id,mensaje);
}

 mensajes_eliminar(id:string){
  this.mensajes.delete(id);
}
mensajes_editar(id:string,mensaje:string){
  let aux_men:Mensaje;
  aux_men=this.mensajes.get(id)!;
  this.mensajes.delete(id);
  aux_men.mensaje=mensaje;
  this.mensajes.set(aux_men.id,aux_men);
}

get lenght_mapa_mensajes(){
  return this.mensajes.size;
}

};
export interface Mensaje{
  id:string,
  user:string,
  mensaje:string,
  pagina:string,
  posicion:Date;
};
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(){
    this.mensajes_paginas.set('/cancer',[]);
    this.mensajes_paginas.set('/colon',[]);
    this.mensajes_paginas.set('/depresion',[]);
    this.mensajes_paginas.set('/tiroide',[]);
    this.mensajes_paginas.set('/cabeza',[]);
    this.mensajes_paginas.set('/ovaricos',[]);
    this.mensajes_paginas.set('/cardiacos',[]); 
  }
  private listaUsers:Lista_usuarios=new Lista_usuarios();
  private active_user:string="visita";
  private mensajes_paginas=new Map<string,Mensaje[]>();

set lista_users_set(user:Usuario){
  this.listaUsers.setingresar=user;
}
get lenght(){return this.listaUsers.lenght;}
get lista_users_get(){
  return this.listaUsers;
}

get_Usuario(id:string){
    return this.listaUsers.getUser(id);
}
//Funcion para ver que usuario esta activo
get ac_userGet(){
  return this.active_user;
};
//Funcion para asignar un nuevo usario activo
set ac_userSet(id:string){
  this.active_user=id;
};

set mensajes_Set(mensaje:Mensaje){
    this.mensajes_paginas.get(mensaje.pagina)?.push(mensaje);
  }
  
get_mensajes_paginas(path:string){
  return this.mensajes_paginas.get(path)!;
}

Eliminar_comentario(path:string,id:string){
  this.mensajes_paginas.get(path)!.forEach( (item, index) => {
    if(item.id === id) this.mensajes_paginas.get(path)!.splice(index,1);
  });
}

obtener_users(){
 let usuarios:string[]=[];
    this.listaUsers.enviarUsuarios.forEach((users)=>{
      if(users.id_user!=="visita" ){
        if(users.id_user !="admin"){ usuarios.push(users.id_user);}
      }
        
    });
  return usuarios;
}

cambiar_dominio(id_inicio:string,id_final:string,id_mensaje:string){
  let mensaje_aux=this.listaUsers.enviarUsuarios.get(id_inicio)!.mensajes_user.get(id_mensaje)!;
  this.listaUsers.enviarUsuarios.get(id_inicio)?.mensajes_eliminar(id_mensaje);
  mensaje_aux.user=id_final;

  this.listaUsers.getUser(id_final).mensajes_set=mensaje_aux;
  this.mensajes_paginas.get(mensaje_aux.pagina)?.forEach((mensaje)=>{
      if(mensaje_aux.id===mensaje.id){
        mensaje=mensaje_aux;
      }
  });
}

cambiar_mensaje(id_inicio:string,id_mensaje:string,mensaje_men:string){
  let mensaje_aux=this.listaUsers.enviarUsuarios.get(id_inicio)!.mensajes_user.get(id_mensaje)!;
  this.listaUsers.enviarUsuarios.get(id_inicio)?.mensajes_eliminar(id_mensaje);
  mensaje_aux.mensaje=mensaje_men;
  this.listaUsers.getUser(id_inicio).mensajes_set=mensaje_aux;
  this.mensajes_paginas.get(mensaje_aux.pagina)?.forEach((mensaje)=>{
      if(mensaje_aux.id===mensaje.id){
        mensaje=mensaje_aux;
      }
  });
}
}

