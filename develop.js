document.addEventListener("DOMContentLoaded", function () {
  const form     = document.querySelector("form")
  const nome     = document.getElementById("nome")
  const email    = document.getElementById("email")
  const idade    = document.getElementById("idade")
  const curso    = document.getElementById("curso")
  const output   = document.getElementById("output")
  const btnReset = document.getElementById("btnReset")

  function limparFormulario() {
    form.reset()
    output.innerHTML = ""
  }

  btnReset.addEventListener("click", limparFormulario)

  form.addEventListener("submit", function (e) {
    e.preventDefault()
    output.innerHTML = `
      Cadastro feito!<br>
      Nome: ${nome.value}<br>
      Email: ${email.value}<br>
      Idade: ${idade.value}<br>
      Curso: ${curso.value}
    `
  })
})
