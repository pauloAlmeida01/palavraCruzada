var contador = 0
function adicionaZonaMorta(trAlvo, quantidade) {
    contador -= 1
    var tr = document.getElementById(trAlvo)
    for (var x = 0; x < quantidade; x++) {
        var td = document.createElement("td");

        td.classList.add("zonaMorta");
        td.id = "EPROM" + x
        tr.appendChild(td);
        contador++
    }

}

function CriarCampo(trAlvo, quantidade, numeroPlaceholder) {
    contador -= 1

    var tr = document.getElementById(trAlvo)
    for (var x = 0; x < quantidade; x++) {
        var td = document.createElement("td");
        var input = document.createElement("input");
        input.placeholder = numeroPlaceholder
        input.id = "EPROM" + x
        td.appendChild(input);
        tr.appendChild(td);
        contador++
    }
}