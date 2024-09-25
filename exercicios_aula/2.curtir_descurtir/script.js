let curtidas = 0;

document.getElementById('curtirBtn').onclick = function () {
    curtidas++;
    document.getElementById('numeroCurtidas').innerText = 'Curtidas: ' + curtidas;
};

document.getElementById('descurtirBtn').onclick = function () {
    if (curtidas > 0) {
        curtidas--;
        document.getElementById('numeroCurtidas').innerText = 'Curtidas: ' + curtidas;
    }
};