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
var dualCore = [];
var memoriaMassa = [];
var cpu = [];
var ula = [];
var registradores = [];
var ram = [];
var rom = [];
var eprom = [];
var flash = [];
var dma = [];
var cs = [];
var adressbus = [];
var databus = [];
var i5 = [];
var i7 = [];
var quadcore = [];
var threads = [];
var cache = [];


function CriarCampo(trAlvo, quantidade, numeroPlaceholder, classe1, classe2) {
    contador -= 1
    var tr = document.getElementById(trAlvo)
    for (var x = 0; x < quantidade; x++) {
        var td = document.createElement("td");
        var input = document.createElement("input");
        input.placeholder = numeroPlaceholder

        input.classList.add(classe1);
        input.classList.add(classe2);

        input.maxLength = 1
        td.appendChild(input);
        tr.appendChild(td);
        contador++
    }
}
var string = ''


function Verificar() {


    dualCore = document.querySelectorAll(".dualcore")
    for (var x = 0; x < dualCore.length; x++) {
        string += dualCore[x].value
    }
    memoriaMassa = document.querySelectorAll(".memMassa")
    for (var x = 0; x < memoriaMassa.length; x++) {
        string += memoriaMassa[x].value
    }
    cpu = document.querySelectorAll(".cpu")
    for (var x = 0; x < cpu.length; x++) {
        string += cpu[x].value
    }
    ula = document.querySelectorAll(".ula")
    for (var x = 0; x < ula.length; x++) {
        string += ula[x].value
    }
    registradores = document.querySelectorAll(".registradores")
    for (var x = 0; x < registradores.length; x++) {
        string += registradores[x].value
    }
    ram = document.querySelectorAll(".ram")
    for (var x = 0; x < ram.length; x++) {
        string += ram[x].value
    }
    rom = document.querySelectorAll(".rom")
    for (var x = 0; x < rom.length; x++) {
        string += rom[x].value
    }
    eprom = document.querySelectorAll(".eprom")
    for (var x = 0; x < eprom.length; x++) {
        string += eprom[x].value
    }
    flash = document.querySelectorAll(".flash")
    for (var x = 0; x < flash.length; x++) {
        string += flash[x].value
    }

    dma = document.querySelectorAll(".dma")
    for (var x = 0; x < dma.length; x++) {
        string += dma[x].value
    }
    cs = document.querySelectorAll(".cs")
    for (var x = 0; x < cs.length; x++) {
        string += cs[x].value
    }
    adressbus = document.querySelectorAll(".adressbus")
    for (var x = 0; x < adressbus.length; x++) {
        string += adressbus[x].value
    }
    databus = document.querySelectorAll(".databus")
    for (var x = 0; x < databus.length; x++) {
        string += databus[x].value
    }
    i5 = document.querySelectorAll(".i5")
    for (var x = 0; x < i5.length; x++) {
        string += i5[x].value
    }
    i7 = document.querySelectorAll(".i7")
    for (var x = 0; x < i7.length; x++) {
        string += i7[x].value
    }
    quadcore = document.querySelectorAll(".quadcore")
    for (var x = 0; x < quadcore.length; x++) {
        string += quadcore[x].value
    }
    threads = document.querySelectorAll(".threads")
    for (var x = 0; x < threads.length; x++) {
        string += threads[x].value
    }
    cache = document.querySelectorAll(".cache")
    for (var x = 0; x < cache.length; x++) {
        string += cache[x].value
    }
    var respostas = []

    console.log(string.toUpperCase())
    var resposta = "DUALCOREMEMORIADEMASSACPUULAREGISTRADORESRAMROMEPROMFLASHDMACSADRESSBUSDATABUSI5I7QUADCORETHREADSCACHE"
    if (string == resposta) {
        alert("Parabéns, você acertou todas as palavras!")
        string = ''
    } else {
        alert("Alguma palavra ou campo está incorreta!")
        string = ''
    }
}
