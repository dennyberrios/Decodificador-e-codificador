let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");
let entrada = document.querySelector("#entrada");
let saida = document.querySelector("#saida");

// Funções de desing e mensagens

function mudancaDeDesign() {
  let centro = document.querySelector("#centro");
  centro.classList.remove("centrar-ena");
  centro.classList.add("centrar-off");

  let copiar = document.querySelector("#copiar");
  copiar.classList.remove("boton-claro2-off");
  copiar.classList.add("boton-claro2-ena");

  let bloque = document.querySelector("#block-text");
  bloque.classList.remove("segundo-off");
  bloque.classList.add("segundo-ena");
}
function RedefiniDesign() {
  let centro = document.querySelector("#centro");
  centro.classList.remove("centrar-off");
  centro.classList.add("centrar-ena");

  let copiar = document.querySelector("#copiar");
  copiar.classList.remove("boton-claro2-ena");
  copiar.classList.add("boton-claro2-off");

  let bloque = document.querySelector("#block-text");
  bloque.classList.remove("segundo-ena");
  bloque.classList.add("segundo-off");
}
function mudancaDeMensagem(ingreso) {
  let aviso = document.querySelector("#aviso");
  let comprobante = comprovaExpressão(ingreso);
  if (comprobante) {
    aviso.textContent = "Nenhuma mensagem foi encontrada";
  } else {
    aviso.textContent = "Só letras e espaço";
  }
}

// Botões

let aux;

encriptar.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (copiar.classList.contains("boton-claro2-off")) {
    mudancaDeDesign();
  }
  if (entrada.value == "" || !comprovaExpressão(entrada.value)) {
    RedefiniDesign();
  }
  mudancaDeMensagem(entrada.value);
  aux = encriptado(entrada.value);
  aux = aux.toLowerCase();
  saida.value = aux;
  entrada.value = "";
});

desencriptar.addEventListener("click", function (evento) {
  evento.preventDefault();
  if (copiar.classList.contains("boton-claro2-off")) {
    mudancaDeDesign();
  }
  if (entrada.value == "" || !comprovaExpressão(entrada.value)) {
    RedefiniDesign();
  }
  mudancaDeMensagem(entrada.value);
  aux = desencriptando(entrada.value);
  aux = aux.toLowerCase();
  aux.toString.toLowerCase;
  saida.value = aux;
  entrada.value = "";
});

copiar.addEventListener("click", function (evento) {
  evento.preventDefault();
  saida.select();
  document.execCommand("copy");
});

saida.addEventListener("input", function (evento) {
  let centro = document.querySelector("#centro");
  console.log(saida.value);
});

//criptografia

function encriptado(frase) {
  let nuevo = "";
  let agrega = "";
  let numeroCambio = 0;
  for (x = 0; x < frase.length; x++) {
    agrega = encrip(frase.charAt(x));
    nuevo = nuevo + agrega;
  }
  return nuevo;
}
function encrip(letra) {
  let letras = ["e", "i", "a", "o", "u"];
  let cambio = ["enter", "imes", "ai", "ober", "ufat"];
  let nuevo1 = letra;
  letras.forEach(function (comparacion, index) {
    if (letra == comparacion) {
      nuevo1 = cambio[index];
      return nuevo1;
    }
  });
  return nuevo1;
}
function desencriptando(frase) {
  let letras = ["e", "i", "a", "o", "u"];
  let cambio = ["enter", "imes", "ai", "ober", "ufat"];
  let final = "";
  let auxi = false;
  for (let x = 0; x < frase.length; x++) {
    auxi = false;
    for (let y = 0; y < letras.length; y++) {
      if (frase.charAt(x) == letras[y]) {
        final = final + letras[y];
        x = x + (cambio[y].length - 1);
        auxi = true;
      }
    }
    if (!auxi) {
      final = final + frase.charAt(x);
    }
  }
  return final;
}

//utilidades

let entradaFocus = document.querySelector("#entrada");
entradaFocus.focus();

function comprovaExpressão(frase) {
  return /^[A-Za-z\s]*$/.test(frase);
}