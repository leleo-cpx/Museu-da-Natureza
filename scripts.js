function saudacao() {
    alert("Bem-vindo ao site!");
}

function confirmacao() {
    var resposta = confirm("Você deseja continuar?");
    if (resposta) {
        alert("Você clicou em OK!");
    } else {
        alert("Você clicou em Cancelar!");
    }
}

function solicitarNome() {
    var nome = prompt("Qual é o seu nome?");
    if (nome != null && nome !== "") {
        alert("Olá, " + nome + "!");
    } else {
        alert("Você não inseriu seu nome.");
    }
}

function translatePage(lang) {
    const url = window.location.href;
    const translateUrl = `https://translate.google.com/translate?hl=${lang}&sl=pt&u=${encodeURIComponent(url)}`;
    window.location.href = translateUrl;
}