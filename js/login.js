'use strict'

let btn_entrar = document.getElementById('btn_entrar')

window.alert("Oi Professorr! verifique  o console(inspecionar) para saber quais os emails e suas senhas disponiveis para testes de funcionalidade :D");
console.log('email: fulano.silva@gmail.com\nsenha: 123456\n\nemail: leticia.silva@gmail.com\nsenha: abcdefg');

async function verificarEmailESenha() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const endPoint = `http://localhost:8080/perfil/?email=${email}&senha=${senha}`
    const response = await fetch(endPoint)
    let dados = await response.json()
    let status = await response.status
    console.log(status);
    if (status == 200) {
        redirecionar()
        return dados
    }
    else {
        window.alert("Email ou Senha incorretos");
        return status
    }
}
function redirecionar() {
    const valorDoInput = document.getElementById('email').value;
    const urlDestino = '../html/home.html?email=' + encodeURIComponent(valorDoInput);
    window.location.href = urlDestino;
}
btn_entrar.addEventListener('click', verificarEmailESenha)
