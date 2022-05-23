function validation() {
    //valido nombre
    if (document.formulario1.nombre.value.length == 0) {
        alert("Por favor escriba un nombre valido")
        document.formulario1.nombre.focus()
        return 0;
    }

    //valido mail
    input = document.formulario1.email;
    var validCharac = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input.value.match(validCharac)) {
        alert("Por favor, introduzca un email valido")
        document.formulario1.email.focus()
        return 0;
    }

    //valido asunto
    if (document.formulario1.asunto.selectedIndex == 0) {
        alert("Por favor seleccione un asunto.")
        document.formulario1.interes.focus()
        return 0;
    }

    if(document.formulario1.message.value.length < 20) {
        alert("Su mensaje debe contener al menos 20 caracters")
        document.formulario1.message.focus()
        return 0;    
    }

    if(document.formulario1.message.value.length > 1000) {
        alert("Su mensaje debe tener menos de 1000 caracteres")
        document.formulario1.message.focus()
        return 0;
    }

    else{
        enviar()
    }

}

function enviar(){
    alert("Email enviado con exito!");
    document.formulario1.submit();
}

//función que chequea la validez del email
function validateEmail(input,x) {
    
}
