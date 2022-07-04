function encriptar(pass){
    console.log("entrar en")
const  bcrypt = require ('bcryptjs');
const hash =  bcrypt.hash(pass,10);
return hash;
}


function desencriptar(pass, pass_incresada){
    console.log("entrar de")
    const  bcrypt = require ('bcryptjs');
    return bcrypt.compare(pass , pass_incresada);
}