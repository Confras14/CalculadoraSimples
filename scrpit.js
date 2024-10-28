function adicao(x, y) {
  return x + y
}

function subtracao(x, y) {
  return x - y
}

function multiplicacao(x, y) {
  return x * y
}

function divisao(x, y) {
  return x / y
}

function radiciacao(x, y) {
  return Math.pow(x, 1 / y)
}

function potenciacao(x, y) {
  y-- 
  z = x
  while(y > 0) {
    x *= z
    y--
  }

  return x
}

let input1, input2, operacao

function pullValues() {
  input1 = Number(document.getElementById("entrada1").value)
  input2 = Number(document.getElementById("entrada2").value)
  operacao = document.getElementById("operacao").value
}

function handleResultado(){
  pullValues()

  if(operacao === "adicao") {
    return adicao(input1, input2)
  } 
  else if(operacao === "subtracao") {
    return subtracao(input1, input2)
  } 
  else if(operacao === "multiplicacao") {
    return multiplicacao(input1, input2)
  } 
  else if(operacao === "divisao") {
    return divisao(input1, input2)
  } 
  else if(operacao === "radiciacao") {
    return radiciacao(input1, input2)
  } 
  else if(operacao === "potenciacao") {
    return potenciacao(input1, input2)
  }
  else {
    return "Operação inválida!"
  }
}

let output = document.querySelector("#valor")

let buttonValue = document.getElementById("imprimirResultado")
buttonValue.addEventListener("click", () => {
  output.textContent = handleResultado()
})


let select = document.querySelector("select")
select.addEventListener("change", () => {
  select.style.color = "#080808"
})
