const inputCep = document.querySelector("#cep");
const btnLimpar = document.querySelector("#btn-limpar");
const form = document.querySelector("#meuFormulario");
const divErro = document.querySelector("#mensagem-erro");
 
inputCep.addEventListener("input", async function () {
  let cep = this.value.replace(/\D/g, "");
 
  divErro.classList.add("d-none");
 
  if (cep.length !== 8) return;
 
  try {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await response.json();
 
    if (dados.erro) {
      divErro.classList.remove("d-none");
      return;
    }
 
    document.querySelector("#logradouro").value = dados.logradouro;
    document.querySelector("#bairro").value = dados.bairro;
    document.querySelector("#cidade").value = dados.localidade;
    document.querySelector("#estado").value = dados.uf;
  } catch (erro) {
    divErro.classList.remove("d-none");
  }
});
 
btnLimpar.addEventListener("click", function () {
  form.reset();
  divErro.classList.add("d-none");
});
 