const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const curso = document.getElementById("curso");
const enviar = document.getElementById("enviar");

const output = document.querySelector("output");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    form.reset();
    output.innerHTML = "";
});

form.addEventListener("submit", (e) => {

    e.preventDefault();

    nomeValue = nome.value;
    emailValue = email.value;
    idadeValue = idade.value;
    cursoValue = curso.value;

    output.innerHTML = `Cadastro feito! Nome: ${nomeValue}, Email: ${emailValue}, Idade: ${idadeValue}, Curso: ${cursoValue} `
})
