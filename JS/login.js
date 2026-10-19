// Botão de visualizar a senha quando clica no botão de "olho"
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

// Função para realizar o login
function entrar() {
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  // Criptografa a senha para comparar com a cadastrada no localStorage
  let senhaCriptografada = CryptoJS.SHA512(senha.value).toString()

  let msgError = document.querySelector('#msgError')

  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }

  // Se ninguém se cadastrou ainda, usa lista vazia
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

  listaUser.forEach((item) => {
    if (usuario.value == item.userCad && senhaCriptografada == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
    }
  })

  if (usuario.value == userValid.user && senhaCriptografada == userValid.senha) {
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom

    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))

    window.location.href = './index.html' // por último
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
}