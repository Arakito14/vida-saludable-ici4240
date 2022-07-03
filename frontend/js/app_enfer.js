
const comentarios=document.getElementById('comentar');
const botones=document.getElementById('btn_group1');
const comens=document.getElementById('ing_comen');
const templa=document.getElementById('comen_1').content;
const frag=document.createDocumentFragment();
var botones_disable = true;
var i=0;

botones.addEventListener('click',event =>{
   event.preventDefault();
   
    var name=comens.querySelector('#usuario').value;
    var clave=comens.querySelector('#pass').value;
    var men=comens.querySelector('#mensaje').value;
  
   if(event.target.id=='b_enviar')
   {    console.log('1');

       templa.querySelector('h5').textContent=name;
       templa.querySelector('p').textContent=men;
       templa.querySelector('#b_cerrar').value='a'+i;
       
        if((i%2)==0){
            templa.querySelector('a').id='a'+i;
            templa.querySelector('a').classList.add('bg-dark','text-light');
            i++; 
        }
        else{
            templa.querySelector('a').id='a'+i;
            templa.querySelector('a').classList.remove('bg-dark','text-light');
            
            i++;
        }
        if(botones_disable==false)
        {
            templa.querySelector('#b_cerrar').disabled=false;
        }
        else if(botones_disable==true)
        {
            templa.querySelector('#b_cerrar').disabled=true;
        }

        let clone=document.importNode(templa,true);
        frag.appendChild(clone);
        comentarios.appendChild(frag);

    }
    
    else if(event.target.id=='b_elim')
    {       
            var botones_int=document.querySelectorAll("#b_cerrar",".boton");
          
            var z=0;
            if(botones_disable){
                botones_int.forEach(function(){
                    botones_int[z].disabled=false;
                    z++;
                   
                });
                botones_disable = false;
            }
            else{
                botones_int.forEach(function(){
                    botones_int[z].disabled=true;
                    z++;
                });
                botones_disable = true;
                }
        }

     else if(event.target.id=='b_com')   
     {
                   
        if((name=='admin')&(clave=='admin')){
            botones.querySelector('#b_elim').classList.remove('invisible');
            Swal.fire({
                icon: 'success',
                title: 'Boton eliminar desbloqueado'
              });
            
        }
        else if((name=='admin')&(clave=='admin1'))
        {
            botones.querySelector('#b_elim').classList.add('invisible');
            Swal.fire({
                icon: 'success',
                title: 'Boton eliminar ocultado'
              });
            var botones_int=document.querySelectorAll("#b_cerrar",".boton");
            var z=0;
            botones_disable = true;
            botones_int.forEach(function(){
                botones_int[z].disabled=true;
                z++;
               
            });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Datos de comprobacion erroneos',
                footer: 'El usuario o la clave a sido incorrecta'
              });
        }
     }
})

comentarios.addEventListener("click",event =>{
    event.preventDefault();
           if(event.target.id=='b_cerrar'){
               console.log(event.target.value);
            comentarios.removeChild(document.getElementById(event.target.value));
           }
       
});


