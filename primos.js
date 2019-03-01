document.getElementById("botoncito").addEventListener("click", decirSiUnNumeroEsPrimo)
document.getElementById("botoncito1").addEventListener("click", busquedaPrimo)
var resultado = document.getElementById("resultado")
function busquedaPrimo() {
  var texto = document.getElementById("textoUsuario").value;
  var numeroMayor = parseInt(texto);
  resultado.innerHTML = ' '
  for (var conteo = 2; conteo <= numeroMayor; conteo++) {
    var divisores = 0;
    for (var subconteo = 2; subconteo <= conteo; subconteo++) {
        var residuoConteo = conteo % subconteo;
        if (residuoConteo == 0) {
          divisores++
        }
    }
    if (divisores === 1) {
      resultado.innerHTML += + conteo + ", "
    }
  }
}
function decirSiUnNumeroEsPrimo() {
  var texto = document.getElementById("textoUsuario").value
  var numeroMayor = parseInt(texto)
  var divisores = 0
  var residuoConteo
  for (var conteo = 2; conteo <= numeroMayor; conteo++) {
      residuoConteo = numeroMayor % conteo
      if (residuoConteo === 0) {
          divisores++
        }

    }
    if (divisores === 1) {
      resultado.innerHTML = numeroMayor + " es un numero primo"
    }
    else {
      resultado.innerHTML = numeroMayor + " no es un numero primo"
    }
}
