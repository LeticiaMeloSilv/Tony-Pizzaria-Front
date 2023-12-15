// 'use strict'
// let url = new URL(window.location.href)
// let conta = url.searchParams.get('email')

// let btn_perfil = document.getElementById('btn_perfil')


// // async function getCategorias() {
// //     const endPoint = `http://localhost:8080/perfil/?email=${email}&senha=${senha}`
// //     const response = await fetch(endPoint)
// //     let dados = await response.json()
// //     let status = await response.status
// //     console.log(status);
// //     if (status == 200) {
// //         redirecionar()
// //         return dados
// //     }
// //     else {
// //         return status
// //     }
// // }


// function redirecionarPerfil() {
//     const valorDoInput = conta
//     const urlDestino = '../html/perfil.html?email=' + encodeURIComponent(valorDoInput);
//     window.location.href = urlDestino;
// }
// btn_perfil.addEventListener('click', redirecionarPerfil)