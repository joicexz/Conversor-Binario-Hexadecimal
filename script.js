
function calcularConversao() {
    var numeroDecimal = document.getElementById('input-num').value;

    var binario = (numeroDecimal >>> 0).toString(2);
    var hexadecimal = (numeroDecimal >>> 0).toString(16).toUpperCase();


    document.getElementById('num-binario').innerHTML = binario;
    document.getElementById('num-hexa').innerHTML = hexadecimal;
}

