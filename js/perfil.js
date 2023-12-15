// 'use strict'
// let url = new URL(window.location.href)
// let conta = url.searchParams.get('email')

// async function getInfoPerfil() {
//     const endPoint = `http://localhost:8080/perfil/usuario/${conta}`
//     const response = await fetch(endPoint)
//     let dados = await response.json()
//     let status=await response.status
//     console.log(status);
//     if(status==200){
//         return dados
//     }
//     else{
//         return status
//     }
// }
// // btn_entrar.addEventListener('click', verificarEmailESenha)
// function criarTags() {
//     getInfoPerfil()

//     const header = document.getElementById('header')

//         const foto_perfil = document.getElementById('foto_perfil')

//             const label_perfil=document.createElement('label')
//             label_perfil.classList.add('picture')

//                 const span_perfil=document.createElement('span')
//                 span_perfil.classList.add('picture__image')

//             const input_perfil=document.createElement('input')
//             input_perfil.id.add('picture__input')
//             input_perfil.name.add('picture__input')

//             const foto_editar=document.createElement('img')
//             foto_editar.src='../img/editar.png'

//         const div_info=document.getElementById




//     const imagem = document.createElement('img')
//     imagem.src = `./img/${dados.imagem}`
//     imagem.alt = dados.nome

//     const divContainer = document.createElement('div')

//     const nome = document.createElement('h2')
//     nome.textContent = dados.nome

//     const cargo = document.createElement('p')
//     cargo.textContent = dados.cargo

//     divContainer.replaceChildren(nome, cargo)

//     foto_perfil.replaceChildren(imagem, divContainer)

//     container.appendChild(foto_perfil)
// }

// dados.forEach(criarCards)
// getInfoPerfil()


// // /perfil/usuario/:email