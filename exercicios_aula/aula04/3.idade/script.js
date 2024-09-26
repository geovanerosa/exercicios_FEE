document.getElementById('idadeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(idade) || idade < 0) {
        resultado.textContent = "Por favor, insira uma idade válida.";
        resultado.style.color = "red";
    } else if (idade >= 18) {
        resultado.textContent = "Acesso permitido. Bem-vindo!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Acesso negado. Você deve ter pelo menos 18 anos.";
        resultado.style.color = "red";
    }
});
