/* const form=document.getElementById('f_cont');

form.addEventListener('submit',function(e){
    e.preventDefault();

    var nombr= document.getElementById('nombre').value;
    var mail= document.getElementById('correo').value;
    var temai= document.getElementById('tema').value;
    var edadd= document.getElementById('edad').value;
    var comen= document.getElementById('mensaje').value;
    var sexo;
    if(document.getElementById('Hombre').checked) {
        sexo= document.getElementById('Hombre').value;
   
      }
    else if(document.getElementById('Mujer').checked){
        sexo= document.getElementById('Mujer').value;
       
      }
    
      form.reset();
})
*/


const comenta=document.getElementById('comentarios');
const comens=document.getElementById('comentar');

var i=0;
var j=1;
comenta.addEventListener('submit',function(e){
    e.preventDefault();

    var nombr= document.getElementById('usuario').value;
    var mensa= document.getElementById('mensaje').value;
    comenta.reset();
const a_ele = document.createElement('a');
const div_ele = document.createElement('div');
const div2_ele = document.createElement('div');
const div3_ele = document.createElement('div');
const bot_ele = document.createElement('button');
const h5_ele=document.createElement('h5');
const p_ele=document.createElement('p');
a_ele.ariaCurrent=true;
if((i%2)==0){
    a_ele.id='a'+j;
    a_ele.classList.add('list-group-item','list-group-item-action');
    i++;
    console.log('Entro el el if')
}
else{
    a_ele.id='a'+j;
    a_ele.classList.add('list-group-item','list-group-item-action','active');
    i++;
}
    bot_ele.classList.add('btn','btn-danger','me-md-2');
    bot_ele.id='b_cerrar';
    bot_ele.innerText='X';
    bot_ele.disabled=true;
    bot_ele.value='a'+j;
    bot_ele.type='button';
    bot_ele.setAttribute("click","");
    console.log(bot_ele.value,'nuevo boton id');
    div_ele.classList.add('row','d-flex','w-100','justify-content-md-between');
    div2_ele.classList.add('col-4');
    div3_ele.classList.add('col-1');
    h5_ele.classList.add('mb-1');
    p_ele.classList.add('mb-1','text-break');
    h5_ele.textContent=nombr;
    p_ele.textContent=mensa;

    div3_ele.appendChild(bot_ele);
    div2_ele.appendChild(h5_ele);
    div_ele.appendChild(div2_ele);
    div_ele.appendChild(div3_ele);
   
    j++;
    a_ele.appendChild(div_ele);
    a_ele.appendChild(p_ele);
    comens.appendChild(a_ele);
})

var botones_disable = true;
document.querySelector("#eliminar_c").addEventListener("click",function(e){
e.preventDefault();
var botones=document.querySelectorAll("#b_cerrar",".boton");
var i=0;
if(botones_disable){
    botones.forEach(function(){
        botones[i].disabled=false;
        i++;
        botones_disable = false;
    });
}
else{
    botones.forEach(function(){
        botones[i].disabled=true;
        i++;
    });
    botones_disable = true;
}
});


let contenedor_a = document.querySelector("#comentar")
        var value_boton;
        var id_bot;
        contenedor_a.addEventListener("click", (event) => {
            value_boton= `${event.target.value}`;
            id_bot= `${event.target.id}`;

        })
contenedor_a.addEventListener("click",function (e){
    e.preventDefault();
           if(id_bot=='b_cerrar'){
                comens.removeChild(document.getElementById(value_boton));
           }
       
});

let  form_com= document.querySelector("#usuarios_com");

    form_com.addEventListener("click",function (e){
        e.preventDefault();
        var user= document.getElementById('user').value;
        var pass= document.getElementById('pass').value;
        var id_bot;   
        var boton=document.querySelector("#eliminar_c",".boton");


        form_com.addEventListener("click", (event) => {
            id_bot= `${event.target.id}`;
        })


            if((user=='admin')&(pass=='admin')){
                
                boton.disabled=false;
                form_com.reset();
            }
            else if((user=='admin')&(pass=='cerrar')&(id_bot=='des_boton'))
            {
                boton.disabled=true;
             
                form_com.reset();
            }
        
    });


