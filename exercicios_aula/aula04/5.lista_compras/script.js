document.getElementById('formLista').addEventListener('submit', function (event) {
    event.preventDefault();

    const itemInput = document.getElementById('item');
    const itemNome = itemInput.value.trim();

    if (itemNome !== "") {
        const listaCompras = document.getElementById('listaCompras');


        const novoItem = document.createElement('li');
        novoItem.textContent = itemNome;


        listaCompras.appendChild(novoItem);


        itemInput.value = "";
    } else {
        alert("Por favor, insira um nome de item válido.");
    }
});
