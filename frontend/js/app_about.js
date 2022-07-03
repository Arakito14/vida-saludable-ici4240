 const form=document.getElementById('f_cont');

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
      Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'Formulario recibido',
        showConfirmButton: false,
        timer: 1500
      });
      form.reset();
});
