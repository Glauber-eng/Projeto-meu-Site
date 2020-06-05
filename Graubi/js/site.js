function login_usuario() {
    var sobre_email = email.value;
     var resultado = sobre_email.indexOf('@')>=0;
     var resul = sobre_email.indexOf('.')>=0;
    if (resultado && resul) {
        resposta.innerHTML = `Valido`;
    }
    else {
        resposta.innerHTML = `Não valido`;
    }
}