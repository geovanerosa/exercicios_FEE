document.getElementById('notaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nota = parseFloat(document.getElementById('nota').value);
    const resultado = document.getElementById('resultado');

    if (nota >= 60) {
        resultado.textContent = "Parabéns! Você foi aprovado.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Infelizmente, você foi reprovado.";
        resultado.style.color = "red";
    }
});
