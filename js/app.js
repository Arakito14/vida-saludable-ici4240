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
    

})
*/


const comenta=document.getElementById('comentarios');
const comens=document.getElementById('comentar');
var i=0
comenta.addEventListener('submit',function(e){
    e.preventDefault();

    var nombr= document.getElementById('nombre').value;
    var mensa= document.getElementById('mensaje').value;

const a_ele = document.createElement('a');
const div_ele = document.createElement('div');
const h5_ele=document.createElement('h5');
const p_ele=document.createElement('p');
if((i%2)==0){
    a_ele.classList.add('list-group-item','list-group-item-action');
    i++;
    console.log('Entro el el if')
}
else{
    a_ele.classList.add('list-group-item','list-group-item-action','active');
    i++;
}
  
    div_ele.classList.add('d-flex','w-100','justify-content-between');
    h5_ele.classList.add('mb-1');
    p_ele.classList.add('mb-1');
    h5_ele.textContent=nombr;
    p_ele.textContent=mensa;

    div_ele.appendChild(h5_ele);
   
    a_ele.appendChild(div_ele);
    a_ele.appendChild(p_ele);
    comens.appendChild(a_ele);
})


