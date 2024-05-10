function enviarDados() {
    
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var linguagem = document.getElementById('linguagem').value;
    
    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

    gostaEstudar = prompt(`Você gosta de estudar ${linguagem} Responda com o número 1 para SIM ou 2 para NÃO.`);

if(gostaEstudar == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}

else if(gostaEstudar == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
}


